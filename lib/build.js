const fs = require('fs-extra');
const path = require('path');
const metaMarked = require('meta-marked');

async function build() {
  fs.ensureDirSync(path.resolve('./dist'));
  fs.copySync(path.resolve('./admin'), path.resolve('./dist/admin'));
  fs.copySync(path.resolve('./images'), path.resolve('./dist/images'));

  const pages = fs.readdirSync(path.resolve('./data/_pages')).map(filename => filename.replace('.md', ''));

  console.log('build files');
  pages.forEach((page) => {
    const mdContent = fs.readFileSync(path.resolve(`./data/_pages/${page}.md`)).toString();
    const markup = metaMarked(mdContent);
    const html = fs.readFileSync(path.resolve('./lib/index.html')).toString().replace('{{content}}', markup.html);

    if (page === 'index') {
      fs.writeFileSync(path.resolve('./dist/index.html'), html);
      return;
    }

    fs.ensureDirSync(path.resolve(`./dist/${page}`));
    fs.writeFileSync(path.resolve(`./dist/${page}/index.html`), html);
  });
}

module.exports = build;
