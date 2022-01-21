import React from "react";
import PropTypes from "prop-types";
import {
  ContactsList,
  ContactListItem,
  ContactName,
  ContactNumber,
  DeleteBtn,
} from "./ContactList.styled";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ContactsList>
    {contacts.map(({ id, name, number }) => (
      <ContactListItem key={id}>
        <p>
          <ContactName>{name}:</ContactName>
          <ContactNumber>{number}</ContactNumber>
        </p>
        <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </DeleteBtn>
      </ContactListItem>
    ))}
  </ContactsList>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
