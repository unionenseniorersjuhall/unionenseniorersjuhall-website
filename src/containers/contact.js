import React from 'react';
import { connect } from 'react-redux';
import CmsContent from '../components/cms-content';
import TextInput from '../components/text-input';
import Textarea from '../components/textarea';
import SubmitButton from '../components/submit-button';
import Form from '../components/form';

function Contact({ content }) {
  return (
    <div>
      <CmsContent>{content}</CmsContent>
      <Form name="contact">
        <TextInput name="name" label="Namn" required />
        <TextInput name="email" label="E-post" required />
        <Textarea name="message" label="Ditt meddelande" required />
        <SubmitButton>Skicka</SubmitButton>
      </Form>
    </div>
  );
}

const mapStateToProps = state => ({
  content: state.pages.contact.content,
});

export default connect(mapStateToProps)(Contact);
