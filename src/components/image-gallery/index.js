import React from 'react';

function ImageGallery({ images, title }) {
  return (
    <div className="image-gallery">
      <h1 className="image-gallery__title">{title}</h1>
      {images.map(image => (
        <div className="image-gallery__item" key={image.src}>
          <img className="image-gallery__image" src={image.src} alt="" />
        </div>
      ))}
    </div>
  )
}

export default ImageGallery;
