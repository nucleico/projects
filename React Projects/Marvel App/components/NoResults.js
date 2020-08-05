import React, { Component } from 'react';
import styles from '../styles/noresults.module.scss';
import { ThemeContext } from '../context/ThemeContext';

class NoResults extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        style={{ backgroundColor: theme.comicBack }}
        className={styles.comicContainer}
      >
        <h2 style={{ color: theme.letter, fontWeight: theme.weight }} className={styles.noResultsComics}>
          No comic appearances registered in the Marvel database!
        </h2>
        <button
          style={{ color: theme.letter }}
          className={styles.xBtn}
          onClick={this.props.eraseData}
        >
          X
        </button>
      </div>
    );
  }
}

export default NoResults;
