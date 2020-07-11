import React from 'react';
import { saveToLS, getFromLS } from '../../utils/helper';

const withTheme = Component =>
  class themeProps extends React.Component {
    state = { checked: false };

    componentDidMount() {
      if (getFromLS('checked')) {
        this.setState({ checked: getFromLS('checked') });
      }
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevState.checked !== this.state.checked) {
        saveToLS('checked', this.state.checked);
      }
    }

    handleCheckbox = checked => {
      this.setState({ checked: checked });
    };

    render() {
      return (
        <>
          <Component
            {...this.props}
            checked={this.state.checked}
            onChecked={this.handleCheckbox}
          />
        </>
      );
    }
  };

export default withTheme;
