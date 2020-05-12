import React, { createContext, Component } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: {
      navBack: '#f7f5f4',
      back: 'white',
      comicBack: 'whitesmoke',
      letter: 'black',
    },
    dark: {
      navBack: '#756f6b',
      back: '#44413e',
      comicBack: '#756f6b',
      letter: '#e2d3cc',
    },
  };
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
