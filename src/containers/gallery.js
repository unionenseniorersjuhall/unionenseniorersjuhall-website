import React from 'react';
import { connect } from 'react-redux';
import CmsContent from '../components/cms-content';
import ImageGallery from '../components/image-gallery';
import Teaser from '../components/teaser';

function Gallery({ content, gallery }) {
  return (
    <div style={{ display: 'flex' }}>
      {Object.entries(gallery).map(([key, object]) => (
        <Teaser key={key} src={object.images[0].src} title={object.title} subTitle={`${object.images.length} bilder`} />
      ))}
      {/*<div key={key}>
        <h3>{object.title}</h3>
        <ImageGallery images={object.images} />
    </div>*/}
    </div>
  );
}

const mapStateToProps = state => ({
  gallery: state.gallery,
});

export default connect(mapStateToProps)(Gallery);
