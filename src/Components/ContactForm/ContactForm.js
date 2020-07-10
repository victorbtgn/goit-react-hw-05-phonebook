import React, { Component } from 'react';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChange = ({ currentTarget: { name, value } }) => {
    this.setState({ [name]: value });
  };

  createContact = evt => {
    evt.preventDefault();

    if (this.state.number.length < 7 || this.state.number.length > 7) {
      toaster.notify('Please fill the correct number: 12-34-567', {
        duration: 5000,
      });
      return;
    }

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.createContact}>
        <label>
          Name *
          <br />
          <input
            type="text"
            name="name"
            value={name}
            className="input"
            onChange={this.inputChange}
          />
        </label>
        <br />
        <label>
          Phone number *
          <br />
          <input
            type="number"
            name="number"
            value={number}
            className="input"
            onChange={this.inputChange}
          />
        </label>
        <br />
        <button className="btn" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
