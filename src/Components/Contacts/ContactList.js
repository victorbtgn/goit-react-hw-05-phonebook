import React from 'react';
import ContactItem from './ContactItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className="list">
      <TransitionGroup>
        {contacts.map(({ id, name, number }) => (
          <CSSTransition key={id} timeout={250} classNames="PhonebookList">
            <ContactItem
              id={id}
              name={name}
              number={number}
              onDelete={() => onDelete(id)}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
