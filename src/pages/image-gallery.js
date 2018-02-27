import React from 'react';
import { connect } from 'react-redux';

function ImageGallery({ galleries }) {
  return Object.entries(galleries).map(([key, object]) => (
    <div>
      <h3>{object.title}</h3>
      {object.images.map(img => (
        <img key={img.src} src={img.src} />
      ))}
    </div>
  ));
}

const mapStateToProps = state => ({
  galleries: state.pages.imageGallery.galleries,
  body: state.pages.imageGallery.body,
});

export default connect(mapStateToProps)(ImageGallery);
