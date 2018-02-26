import React from 'react';
import { connect } from 'react-redux';

function Program({ program }) {
  return Object.entries(program).map(([key, object]) => (
    <div>
      <h3>{object.title}</h3>
      <a href={object.file} download>Ladda ner</a>
    </div>
  ));
}

const mapStateToProps = state => ({
  program: state.program,
});

export default connect(mapStateToProps)(Program);
