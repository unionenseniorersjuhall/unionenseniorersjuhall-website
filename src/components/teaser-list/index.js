import React from 'react';
import Teaser from '../teaser';

function TeaserList({ gallery }) {
  return (
    <div className="teaser-list">
      {Object.entries(gallery).map(([key, object]) => (
        <Teaser key={key} href={`/bildgalleri/${key}`} src={object.images[0].src.replace('.jpg', '_medium.jpg').replace('.png', '_medium.png').substr(1)} title={object.title} />
      ))}
    </div>
  );
}

export default TeaserList;
