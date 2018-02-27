import React from 'react';

function Image({ src, alt }) {
  return <img className="image" src={src} alt={alt} />;
}

Image.defaultProps = {
  alt: '',
};

export default Image;
