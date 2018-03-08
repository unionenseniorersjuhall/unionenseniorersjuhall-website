import React from 'react';
import { connect } from 'react-redux';
import CmsContent from '../components/cms-content';

function Program({ content, programs }) {
  return (
    <ul>
      {Object.entries(programs).map(([key, object]) => (
        <li>
          <h3><a href={object.pdf} download>{object.title}</a></h3>
        </li>
      ))}
    </ul>
  )
}

const mapStateToProps = state => ({
  programs: state.pages.program.items,
  content: state.pages.program.content,
});

export default connect(mapStateToProps)(Program);
