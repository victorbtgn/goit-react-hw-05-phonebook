import React from 'react';
import withTheme from '../HOC/withTheme';

const ThemeContext = ({ checked, onChecked }) => {
  const handleCheckbox = evt => {
    onChecked(evt.target.checked);
  };

  handleTheme(checked);

  return (
    <div className="ThemeContext">
      <input
        type="checkbox"
        id="theme"
        name="theme"
        checked={checked}
        onChange={handleCheckbox}
      />
      <label htmlFor="theme">{checked ? 'Dark' : 'Ligth'}</label>
    </div>
  );
};

export default withTheme(ThemeContext);

const handleTheme = checked => {
  if (!checked) {
    const body = document.querySelector('body');
    body.classList.add('bodyLigth');
    body.classList.remove('bodyDark');
  } else {
    const body = document.querySelector('body');
    body.classList.add('bodyDark');
    body.classList.remove('bodyLigth');
  }
};
