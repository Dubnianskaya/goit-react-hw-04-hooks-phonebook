import React, { Component } from "react";
import Form from "../Form";
import ContactList from "../ContactList";
import Filter from "../Filter";
import { Container, PhonebookTitle, ContactsTitle } from "./App.styled";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  formSubmitHandler = ({ name, number }) => {
    const contactCard = {
      id: nanoid(),
      name,
      number,
    };

    const normalizedName = contactCard.name.toLowerCase();
    const nameFilter = (contact) =>
      normalizedName === contact.name.toLowerCase();
    const contactSameNameChecked = this.state.contacts.some(nameFilter);

    if (contactSameNameChecked) {
      return alert(`${contactCard.name} is already in contacts`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [contactCard, ...contacts],
      }));
    }
  };

  changeFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <Form onSubmit={this.formSubmitHandler} />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter value={this.state.filter} onFilterChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
