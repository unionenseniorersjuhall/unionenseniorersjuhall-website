import React from 'react';
import { connect } from 'react-redux';
import CmsContent from '../components/cms-content';

function ImageGallery({ content, galleries }) {
  return (
    <div>
      <CmsContent>{content}</CmsContent>
      {Object.entries(galleries).map(([key, object]) => (
        <div key={key}>
          <h3>{object.title}</h3>
          {object.images.map(img => (
            <img key={img.src} src={img.src} />
          ))}
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  galleries: state.pages.imageGallery.galleries,
  content: state.pages.imageGallery.content,
});

export default connect(mapStateToProps)(ImageGallery);
