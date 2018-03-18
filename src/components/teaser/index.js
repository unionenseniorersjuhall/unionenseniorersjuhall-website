import React from 'react';

function Teaser({ src, alt, title, subTitle }) {
  return (
    <div className="teaser">
      <div className="teaser__image" style={{ backgroundImage: `url(${src})` }} />
      <div className="teaser__text-wrapper">
        <h3 className="teaser__title">{title}</h3>
        <h4 className="teaser__sub-title">{subTitle}</h4>
      </div>
    </div>
  );
}

export default Teaser;
