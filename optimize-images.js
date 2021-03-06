const path = require('path');
const fs = require('fs-extra');
const Jimp = require('jimp');

const imageDir = path.join(__dirname, 'src/assets/uploads');

const images = fs.readdirSync(imageDir)
  .filter(filename => filename.endsWith('.jpg') || filename.endsWith('.png'))
  .filter(filename => !filename.endsWith('_small.jpg') && !filename.endsWith('_small.png'))
  .filter(filename => !filename.endsWith('_large.jpg') && !filename.endsWith('_large.png'))
  .map(filename => path.join(imageDir, filename));

console.log('Resize images:');
images.forEach((image) => {
  console.log(image);
  Jimp.read(image)
    .then((tempImage) => {
      tempImage
        .resize(Jimp.AUTO, 100)
        .write(image.replace('.jpg', '_small.jpg').replace('.png', '_small.png'));
    })
    .catch((error) => {
      console.error(error);
    });
  Jimp.read(image)
    .then((tempImage) => {
      tempImage
        .resize(400, Jimp.AUTO)
        .write(image.replace('.jpg', '_medium.jpg').replace('.png', '_medium.png'));
    })
    .catch((error) => {
      console.error(error);
    });
  Jimp.read(image)
    .then((tempImage) => {
      tempImage
        .resize(780, Jimp.AUTO)
        .write(image.replace('.jpg', '_large.jpg').replace('.png', '_large.png'));
    })
    .catch((error) => {
      console.error(error);
    });
});
