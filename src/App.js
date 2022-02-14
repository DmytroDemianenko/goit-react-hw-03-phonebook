import s from './App.module.css';
import React, { Component } from 'react';
import Contacts from './Components/Contacts';
import Form from './Components/Form';
import { nanoid } from 'nanoid';
import Filter from './Components/Filter';
import contactFilter from './Components/Utils/contactFilter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  formSubmit = contact => {
    const inputId = nanoid();
    if (this.state.contacts.some(el => el.name === contact.name)) {
      alert(this.state.name + ' is already in contacts');
      return;
    }
    this.setState(prev => ({
      contacts: [...prev.contacts, { ...contact, id: inputId }],
    }));
  };
  handleFilterContact = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  handleDeleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    console.log(parsedContacts);
    if(parsedContacts){this.setState({ contacts: parsedContacts })}
    
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts)) 
    }
  }
  render() {
    const contacts = contactFilter(this.state.contacts, this.state.filter);
    return (
      <div className={s.container}>
        <div>
          <Form onSubmit={this.formSubmit}></Form>
          <Filter
            filterValue={this.state.filter}
            onFilter={this.handleFilterContact}
          />
          <ul>
            <h2>Contacts</h2>
            <Contacts
              contacts={contacts}
              onDeleteContact={this.handleDeleteContact}
            ></Contacts>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
