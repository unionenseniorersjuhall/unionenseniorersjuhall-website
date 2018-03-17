import React from 'react';
import { connect } from 'react-redux';
import CmsContent from '../components/cms-content';
import TextInput from '../components/text-input';
import Textarea from '../components/textarea';
import SubmitButton from '../components/submit-button';

function Contact({ content }) {
  return (
    <div>
      <CmsContent>{content}</CmsContent>
      <form name="contact" method="POST" data-netlify="true">
        <TextInput hidden name="form-name" value="contact" /> {/* for netlify, see forms.html */}
        <TextInput name="name" label="Namn" />
        <TextInput name="email" label="Email" />
        <Textarea name="message" label="Ditt meddelande" />
        <SubmitButton>Skicka</SubmitButton>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  content: state.pages.contact.content,
});

export default connect(mapStateToProps)(Contact);
