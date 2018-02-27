import React from 'react';
import { connect } from 'react-redux';
import CmsContent from '../components/cms-content';

function Hem({ body }) {
  return <CmsContent>{body}</CmsContent>;
}

const mapStateToProps = state => ({
  body: state.pages.hem.body,
});

export default connect(mapStateToProps)(Hem);
