import React from 'react';
import { connect } from 'react-redux';
import CmsContent from '../components/cms-content';
import FileList from '../components/file-list';

function Program({ content, programs }) {
  return [
    <CmsContent key="1">{content}</CmsContent>,
    <FileList key="2" files={programs} />
  ]
}

const mapStateToProps = state => ({
  programs: state.pages.program.items,
  content: state.pages.program.content,
});

export default connect(mapStateToProps)(Program);
