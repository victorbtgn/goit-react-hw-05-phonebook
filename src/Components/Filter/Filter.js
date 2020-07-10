import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter, contactsLength, onChange }) => (
  <>
    {contactsLength > 1 && (
      <label>
        Find contacts by name
        <br />
        <input
          type="text"
          name="filter"
          value={filter}
          className="input"
          // placeholder="Phone number"
          onChange={onChange}
        />
      </label>
    )}
  </>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  contactsLength: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
