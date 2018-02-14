const fs = require('fs-extra');
const path = require('path');
const metaMarked = require('meta-marked');

async function build() {
  const pages = fs.readdirSync(path.resolve('./public/_pages')).map(filename => filename.replace('.md', ''));

  console.log('build files');
  pages.forEach((page) => {
    const mdContent = fs.readFileSync(path.resolve(`./public/_pages/${page}.md`)).toString();
    const markup = metaMarked(mdContent);
    const html = fs.readFileSync(path.resolve('./lib/index.html')).toString().replace('{{content}}', markup.html);
    fs.writeFileSync(path.resolve(`./public/${page}.html`), html);
  });
}

module.exports = build;
