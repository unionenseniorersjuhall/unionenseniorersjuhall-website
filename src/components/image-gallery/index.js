import React from 'react';

function ImageGallery({ images, title }) {
  return (
    <div className="image-gallery">
      <h1 className="image-gallery__title">{title}</h1>
      <ul className="image-gallery__images">
        {images.map(image => (
          <li className="image-gallery__item" key={image.src}>
            <img className="image-gallery__image" src={image.src.replace('.png', '_small.png').replace('.jpg', '_small.jpg')} alt="" />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ImageGallery;
