import React, { Component } from 'react';
import css from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  render() {
    const { contacts } = this.state;

    return (
      <div className={css.box}>
        <h2>Phonebook</h2>
        <ContactForm />
        <h2>Contacts</h2>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
