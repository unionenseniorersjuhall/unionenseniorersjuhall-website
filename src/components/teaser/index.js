import React from 'react';
import { Link } from 'react-router-dom';

function Teaser({ src, alt, title, subTitle, href }) {
  return (
    <Link to={href} className="teaser">
      <div className="teaser__image" style={{ backgroundImage: `url(${src})` }}>
        <div className="teaser__cta">Se bilder</div>
      </div>
      <h3 className="teaser__title">{title}</h3>
    </Link>
  );
}

Teaser.defaultProps = {
  href: '',
};

export default Teaser;
