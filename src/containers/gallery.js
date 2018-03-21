import React from 'react';
import { connect } from 'react-redux';
import TeaserList from '../components/teaser-list';

function Gallery({ content, gallery }) {
  return (
    <TeaserList gallery={gallery} />
  );
}

const mapStateToProps = state => ({
  gallery: state.gallery,
});

export default connect(mapStateToProps)(Gallery);
