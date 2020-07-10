import React from 'react';

const Alert = ({ message, status }) => (
  <span className={`alert alert-${status}`}>{message}</span>
  //   <button type="button" className={`alert alert-${status}`}>
  // {message}
  //   </button>
);

export default Alert;
