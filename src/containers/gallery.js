import React from 'react';
import { connect } from 'react-redux';
import CmsContent from '../components/cms-content';
import ImageGallery from '../components/image-gallery';

function Gallery({ content, galleries }) {
  return (
    <div>
      <CmsContent>{content}</CmsContent>
      {Object.entries(galleries).map(([key, object]) => (
        <div key={key}>
          <h3>{object.title}</h3>
          <ImageGallery images={object.images} />
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  galleries: state.pages.imageGallery.galleries,
  content: state.pages.imageGallery.content,
});

export default connect(mapStateToProps)(Gallery);
