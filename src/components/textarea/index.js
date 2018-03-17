import React, { Component } from 'react';

class Textarea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const { label, name } = this.props;
    const { value } = this.state;

    return (
      <div className="textarea">
        <label className="textarea__label">{label}</label>
        <textarea className="textarea__input" name={name} value={value} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Textarea;
