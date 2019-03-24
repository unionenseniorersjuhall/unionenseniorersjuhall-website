import React from 'react';
import { connect } from 'react-redux';
import CmsContent from '../components/cms-content';

function Information({ content }) {
  return <CmsContent>{content}</CmsContent>;
}

const mapStateToProps = state => ({
  content: state.pages.information.content,
});

export default connect(mapStateToProps)(Information);
