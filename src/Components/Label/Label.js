import React from 'react';

const Label = ({ checked }) => (
  <label htmlFor="theme">{checked ? ' Dark' : 'Ligth'}</label>
);

export default Label;
