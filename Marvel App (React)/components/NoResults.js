import React, { Component } from 'react';
import '../styles/styles.css';
import { ThemeContext } from '../context/ThemeContext';

class NoResults extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        style={{ backgroundColor: theme.comicBack }}
        className="comicContainer"
      >
        <h2 style={{ color: theme.letter }} className="noResultsComics">
          No comic appearances registered in the Marvel database!
        </h2>
        <button
          style={{ color: theme.letter }}
          className="xBtn"
          onClick={this.props.eraseData}
        >
          X
        </button>
      </div>
    );
  }
}

export default NoResults;
