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
    if (this.props.required && this.state.value.length < 1) {
      this.setState({ error: 'Detta fält är obligatoriskt' });
    }
  }

  render() {
    const { label, name, hidden } = this.props;
    const value = this.props.value !== '' ? this.props.value : this.state.value;

    return (
      <div className={`text-input${hidden ? ' hidden' : ''}`}>
        <label className="text-input__label">{label}</label>
        <input className="text-input__input" type={hidden ? 'hidden' : 'text'} name={name} value={value} onChange={this.handleChange} onBlur={this.validate} />
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
};

export default TextInput;
