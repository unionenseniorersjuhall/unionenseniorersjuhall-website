import React from 'react';
import { connect } from 'react-redux';

function Bildgalleri({ galleries }) {
  return Object.entries(galleries).map(([key, object]) => (
    <div>
      <h3>{object.title}</h3>
      {object.bilder.map(img => (
        <img key={img.image} src={img.image} />
      ))}
    </div>
  ));
}

const mapStateToProps = state => ({
  galleries: state.bildgalleri,
});

export default connect(mapStateToProps)(Bildgalleri);
