import React from 'react';
import { connect } from 'react-redux';

function Program({ title, program }) {
  return Object.keys(program).map((item) => (
    <div>
      <a href={item.file}>Ladda ner</a>
    </div>
  ));
}

const mapStateToProps = state => ({
  title: state.program.title,
  program: state.program,
});

export default connect(mapStateToProps)(Program);
