import { useState, useEffect, memo } from "react";
import Form from "../Form";
import ContactList from "../ContactList";
import Filter from "../Filter";
import { Container, PhonebookTitle, ContactsTitle } from "./App.styled";
import { nanoid } from "nanoid";

function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("contacts")) ?? [];
  });
  const [filter, setFilter] = useState("");

  const formSubmitHandler = ({ name, number }) => {
    const contactCard = {
      id: nanoid(),
      name,
      number,
    };

    const normalizedName = contactCard.name.toLowerCase();
    const nameFilter = (contact) =>
      normalizedName === contact.name.toLowerCase();
    const contactSameNameChecked = contacts.some(nameFilter);

    if (contactSameNameChecked) {
      return alert(`${contactCard.name} is already in contacts`);
    } else {
      setContacts((prevState) => [contactCard, ...prevState]);
    }
  };

  const changeFilter = (event) => {
    setFilter(event.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <Form onSubmit={formSubmitHandler} />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter value={filter} onFilterChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
}

export default memo(App);
