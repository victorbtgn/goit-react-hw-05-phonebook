import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from './Common/Container/Container';
import ContactForm from './Components/ContactForm/ContactForm';
import Filter from './Components/Filter/Filter';
import ContactList from './Components/Contacts/ContactList';
import Section from './Common/Section/Section';
import Alert from './Components/Alert/Alert';
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';
import { saveToLS, getFromLS } from './utils/helper';
import { Transition } from 'react-transition-group';
import './App.css';
import ThemeContext from './Common/ThemeContext/ThemeContext';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
    alert: false,
    timerId: null,
  };

  componentDidMount() {
    if (getFromLS('contacts')) {
      this.setState({ contacts: getFromLS('contacts') });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      saveToLS('contacts', this.state.contacts);
    }

    if (prevState.timerId !== this.state.timerId) {
      this.setState({ timerId: null });
    }
  }

  inputChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    this.setState({ [name]: value });
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    const isExist = contacts.find(contact => contact.name === name);

    if (isExist) {
      this.toggleAlert();
      const timerId = setTimeout(() => this.toggleAlert(), 5000);
      this.setState({ timerId: timerId });
    } else if (!name || !number) {
      toaster.notify('Please fill the form', {
        duration: 5000,
      });
    } else {
      const contact = {
        id: uuidv4(),
        name: name,
        number: number,
      };

      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  toggleAlert = () => {
    this.setState(({ alert }) => ({ alert: !alert }));
  };

  render() {
    const { contacts, filter, alert } = this.state;
    const toLowerFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(toLowerFilter),
    );

    return (
      <>
        <Container>
          <Transition in={true} timeout={500} appear>
            {status => <h1 className={`h1Title-${status}`}>Phonebook</h1>}
          </Transition>

          <ThemeContext />

          <Section title="New contact">
            <ContactForm
              onSubmit={this.addContact}
              onChange={this.inputChange}
            />
          </Section>

          <Section title="Contacts">
            <Filter
              filter={filter}
              contactsLength={contacts.length}
              onChange={this.inputChange}
            />
            <ContactList
              contacts={visibleContacts}
              onDelete={this.deleteContact}
            />
          </Section>
        </Container>

        {alert && (
          <Transition in={true} timeout={100} appear>
            {status => (
              <Alert message="Contact already exists" status={status} />
            )}
          </Transition>
        )}
      </>
    );
  }
}
