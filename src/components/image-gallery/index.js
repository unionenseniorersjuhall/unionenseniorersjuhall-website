import React from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

function ImageGallery(props) {
  const images = props.images.map((image) => ({
    original: image.src.replace('.png', '_large.png').replace('.jpg', '_large.jpg'),
    thumbnail: image.src.replace('.png', '_small.png').replace('.jpg', '_small.jpg'),
  }));

  return <ReactImageGallery items={images} />;
}

export default ImageGallery;
