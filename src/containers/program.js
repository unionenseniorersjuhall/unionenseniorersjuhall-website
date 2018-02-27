import React from 'react';
import { connect } from 'react-redux';
import CmsContent from '../components/cms-content';

function Program({ content, programs }) {
  return Object.entries(programs).map(([key, object]) => (
    <div>
      <CmsContent>{content}</CmsContent>
      <h3>{object.title}</h3>
      <a href={object.pdf} download>Ladda ner</a>
    </div>
  ));
}

const mapStateToProps = state => ({
  programs: state.pages.program.items,
  content: state.pages.program.content,
});

export default connect(mapStateToProps)(Program);
