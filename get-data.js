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

module.exports = getData;
