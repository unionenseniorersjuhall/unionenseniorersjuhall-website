import React from 'react';
import { connect } from 'react-redux';
import CmsContent from '../components/cms-content';

function Contact({ content }) {
  return (
    <div>
      <CmsContent>{content}</CmsContent>
      <form name="contact" method="POST" netlify>
        <p>
          <label>Ditt namn: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Din Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Meddelande: <textarea name="message" /></label>
        </p>
        <p>
          <button type="submit">Skicka</button>
        </p>
      </form>
      <input type="text" placeholder="test" />
    </div>
  );
}

const mapStateToProps = state => ({
  content: state.pages.contact.content,
});

export default connect(mapStateToProps)(Contact);
