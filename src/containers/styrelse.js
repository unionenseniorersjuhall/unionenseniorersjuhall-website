import React from 'react';
import { connect } from 'react-redux';
import CmsContent from '../components/cms-content';

function Styrelse({ content }) {
  return <CmsContent>{content}</CmsContent>;
}

const mapStateToProps = state => ({
  content: state.pages.styrelse.content,
});

export default connect(mapStateToProps)(Styrelse);
