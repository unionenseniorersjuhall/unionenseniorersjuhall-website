import React from 'react';
import TextInput from '../text-input';

function Form({ children, name }) {
  return (
    <form className="form" name={name} data-netlify="true" method="POST">
      <TextInput hidden name="form-name" value={name} /> {/* for netlify, see forms.html */}
      {children}
    </form>
  );
}

export default Form;
