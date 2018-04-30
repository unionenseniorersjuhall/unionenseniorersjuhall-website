import React from 'react';
import ReactImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
import 'react-image-gallery/styles/css/image-gallery.css';

function ImageGallery(props) {
  const images = props.images.map((image) => ({
    original: image.src.replace('.png', '_large.png').replace('.jpg', '_large.jpg'),
    thumbnail: image.src.replace('.png', '_small.png').replace('.jpg', '_small.jpg'),
  }));

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <Link to="/bildgalleri">Tillbaka</Link>
      </div>
      <ReactImageGallery items={images} />
    </div>
  );
}

export default ImageGallery;
