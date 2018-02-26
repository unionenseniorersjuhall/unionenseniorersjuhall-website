import React from 'react';
import { connect } from 'react-redux';

function Program({ program }) {
  return Object.entries(program).map(([title, item]) => (
    <div>
      <h3>{title}</h3>
      <a href={item.file} download>Ladda ner</a>
    </div>
  ));
}

const mapStateToProps = state => ({
  program: state.program,
});

export default connect(mapStateToProps)(Program);
