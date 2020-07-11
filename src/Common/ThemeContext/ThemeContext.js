import React, { Component } from 'react';
import { saveToLS, getFromLS } from '../../utils/helper';

class ThemeContext extends Component {
  state = { checked: false };

  componentDidMount() {
    if (getFromLS('checked')) {
      this.setState({ checked: getFromLS('checked') });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.checked !== this.state.checked) {
      saveToLS('checked', this.state.checked);
      this.handleTheme(this.state.checked);
    }
  }

  handleCheckbox = evt => {
    this.setState({ checked: evt.target.checked });
  };

  handleTheme = checked => {
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

  render() {
    return (
      <div className="ThemeContext">
        <input
          type="checkbox"
          id="theme"
          name="theme"
          checked={this.state.checked}
          onChange={this.handleCheckbox}
        />
        <label htmlFor="theme">Theme</label>
      </div>
    );
  }
}

export default ThemeContext;
