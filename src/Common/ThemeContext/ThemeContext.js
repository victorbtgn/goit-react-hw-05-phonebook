import React, { createContext } from 'react';
import withTheme from '../HOC/withTheme';
import Label from '../../Components/Label/Label';

const ThemeContext = createContext();

const Theme = ({ checked, onChecked }) => {
  const handleCheckbox = evt => {
    onChecked(evt.target.checked);
  };

  handleTheme(checked);

  return (
    <ThemeContext.Provider value={checked}>
      <div className="ThemeContext">
        <input
          type="checkbox"
          id="theme"
          name="theme"
          checked={checked}
          onChange={handleCheckbox}
        />
        <Toolbar />
      </div>
    </ThemeContext.Provider>
  );
};

export default withTheme(Theme);

const Toolbar = () => (
  <ThemeContext.Consumer>
    {checked => <Label checked={checked} />}
  </ThemeContext.Consumer>
);

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
