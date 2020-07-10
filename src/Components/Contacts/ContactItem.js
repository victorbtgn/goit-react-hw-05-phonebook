import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDelete }) => (
  <li className="list-item">
    <div className="list-item-data">
      <span>{name}:</span>
      <span>
        {number[0]}
        {number[1]}-{number[2]}
        {number[3]}-{number[4]}
        {number[5]}
        {number[6]}
      </span>
    </div>
    <button className="btn" type="button" onClick={() => onDelete(id)}>
      Delete
    </button>
  </li>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;

// .toLocaleString('en-IN')
