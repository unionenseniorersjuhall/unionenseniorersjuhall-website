import React from 'react';
import { connect } from 'react-redux';

function Bildgalleri({ galleries }) {
  return Object.entries(galleries).map(([key, object]) => (
    <div>
      <h3>{object.title}</h3>
      {object.bilder.map(img => (
        <img key={img.src} src={img.src} />
      ))}
    </div>
  ));
}

const mapStateToProps = state => ({
  galleries: state.pages.bildgalleri.galleri,
  body: state.pages.bildgalleri.body,
});

export default connect(mapStateToProps)(Bildgalleri);
