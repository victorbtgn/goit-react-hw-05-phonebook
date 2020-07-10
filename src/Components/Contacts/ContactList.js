import React from 'react';
import ContactItem from './ContactItem';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => (
  <ul className="list">
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        id={id}
        name={name}
        number={number}
        onDelete={() => onDelete(id)}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
