const fs = require('fs-extra');
const path = require('path');

function getFileData(dir) {
  if (dir.endsWith('.json')) {
    return require(dir);
  }

  return {};
}

function getData(dir) {
  if (fs.statSync(dir).isFile()) {
    return getFileData(dir);
  }

  const data = {};

  fs.readdirSync(dir).forEach((childDir) => {
    data[childDir.split('.')[0]] = getData(path.join(dir, childDir));
  });

  return data;
}

function getPreloadedState() {
  return getData(path.join(__dirname, './src/data'));
/*
  const settings = require('./src/data/_settings/general.json');
  const homepage = require('./src/data/_homepage/homepage.json');
  homepage.body = metaMarked(homepage.body).html;

  const pages = fs.readdirSync(path.resolve('./src/data/_pages'))
    .map(filename => filename.replace('.json', ''))
    .map((page) => {
      const pageData = require(`./src/data/_pages/${page}.json`);
      pageData.body = metaMarked(pageData.body).html;
      pageData.route = `/${page}`;

      return pageData;
    });

  return ({ homepage, pages, settings });*/
}

module.exports = getPreloadedState;
