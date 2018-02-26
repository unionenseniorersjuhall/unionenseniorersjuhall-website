import React from 'react';
import { connect } from 'react-redux';
import CmsContent from '../components/cms-content';

function Hem({ title, body }) {
  return <CmsContent title={title}>{body}</CmsContent>;
}

const mapStateToProps = state => ({
  title: state.hem.data.title,
  body: state.hem.data.body,
});

export default connect(mapStateToProps)(Hem);
