import React from 'react';
import { connect } from 'react-redux';
import ImageGallery from '../components/image-gallery';

function GalleryDetail({ match, gallery }) {
  const { images, title } = gallery[match.params.slug];
  return (
    <ImageGallery images={images} title={title} />
  );
}

const mapStateToProps = state => ({
  gallery: state.gallery,
});

export default connect(mapStateToProps)(GalleryDetail);
