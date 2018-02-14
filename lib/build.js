const fs = require('fs-extra');
const path = require('path');
const metaMarked = require('meta-marked');

async function build() {
  console.log('clear dist folder');
  fs.removeSync(path.resolve('./dist'));
  fs.ensureDirSync(path.resolve('./dist'));

  const pages = fs.readdirSync(path.resolve('./_pages')).map(filename => filename.replace('.md', ''));

  console.log('build files');
  pages.forEach((page) => {
    const mdContent = fs.readFileSync(path.resolve(`./_pages/${page}.md`)).toString();
    const markup = metaMarked(mdContent);
    const html = fs.readFileSync(path.resolve('./lib/index.html')).toString().replace('{{content}}', markup.html);
    fs.writeFileSync(path.resolve(`./dist/${page}.html`), html);
  });

  console.log('copy admin files');
  fs.copySync(path.resolve('./admin'), path.resolve('./dist/admin'))
}

module.exports = build;
