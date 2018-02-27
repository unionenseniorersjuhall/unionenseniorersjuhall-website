import React from 'react';
import Image from '../image';

function ImageGallery({ images }) {
  return (
    <ul className="image-gallery">
      {images.map(image => (
        <li key={image.src} className="image-gallery__item">
          <Image src={image.src} alt={image.alt} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery;
