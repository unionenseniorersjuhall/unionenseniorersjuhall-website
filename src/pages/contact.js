import React from 'react';
import CmsContent from '../components/cms-content';

function Contact({ content }) {
  return (
    <div>
      <CmsContent>{content}</CmsContent>
      <input type="text" placeholder="test" />
    </div>
  );
}

const mapStateToProps = state => ({
  content: state.pages.contact.content,
});

export default connect(mapStateToProps)(Contact);
