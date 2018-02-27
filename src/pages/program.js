import React from 'react';
import { connect } from 'react-redux';
import CmsContent from '../components/cms-content';

function Program({ body, program }) {
  return Object.entries(program).map(([key, object]) => (
    <div>
      <CmsContent>{body}</CmsContent>
      <h3>{object.title}</h3>
      <a href={object.pdf} download>Ladda ner</a>
    </div>
  ));
}

const mapStateToProps = state => ({
  program: state.pages.program.items,
  body: state.pages.program.body,
});

export default connect(mapStateToProps)(Program);
