import React from 'react';
import { connect } from 'react-redux';
import CmsContent from '../components/cms-content';

function Home({ content }) {
  return <CmsContent>{content}</CmsContent>;
}

const mapStateToProps = state => ({
  content: state.pages.home.content,
});

export default connect(mapStateToProps)(Home);
