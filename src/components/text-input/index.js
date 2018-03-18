import React, { Component } from 'react';

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.state= {
      value: '',
      error: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value, error: '' });
  }

  validate(e) {

  }

  render() {
    const { label, name, hidden, required, email } = this.props;
    const value = this.props.value !== '' ? this.props.value : this.state.value;

    return (
      <div className={`text-input${hidden ? ' hidden' : ''}`}>
        <label className="text-input__label">{label}</label>
        <input className="text-input__input" type={email ? 'email' : hidden ? 'hidden' : 'text'} name={name} value={value} onChange={this.handleChange} required={required} />
        {this.state.error.length > 0 && (
          <span className="text-input__error">{this.state.error}</span>
        )}
      </div>
    );
  }
}

TextInput.defaultProps = {
  value: '',
  required: false,
  hidden: false,
  email: false,
};

export default TextInput;
