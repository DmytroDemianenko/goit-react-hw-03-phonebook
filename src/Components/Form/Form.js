import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import s from '../../App.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInputId = nanoid();
  numberInputId = nanoid();
  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <h2>Phonebook</h2>
        <label className={s.label} htmlFor={this.nameInputId}>
          Name
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={this.state.name}
          onChange={this.handleInputChange}
          placeholder="Enter contact name"
          id={this.nameInputId}
          required
        />
        <label className={s.label} htmlFor={this.numberInputId}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={this.state.number}
          onChange={this.handleInputChange}
          placeholder="Enter contact phone number"
          id={this.numberInputId}
          required
        />
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default Form;
