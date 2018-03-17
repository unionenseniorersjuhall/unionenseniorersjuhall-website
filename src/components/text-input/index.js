import React, { Component } from 'react';

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.state= {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const { label, name, hidden } = this.props;
    const value = this.props.value !== '' ? this.props.value : this.state.value;

    return (
      <div className="text-input">
        <label className="text-input__label">{label}</label>
        <input className="text-input__input" type={hidden ? 'hidden' : 'text'} name={name} value={value} onChange={this.handleChange} />
      </div>
    );
  }
}

TextInput.defaultProps = {
  value: '',
};

export default TextInput;
