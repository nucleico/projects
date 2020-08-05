import React, { Component } from 'react';
import styles from '../styles/searchbar.module.scss';
import Logo from '../img/marvellogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../context/ThemeContext';

class SearchBar extends Component {
  static contextType = ThemeContext;  

  handleChange = (event) => {
    this.props.getCharacter(event.target.value);
  };

  render() {
    const { isLightTheme, light, dark, toggleTheme } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <div style={{ backgroundColor: theme.navBack }} className={styles.navBar}>
        <img src={Logo} className={styles.marvelLogo} alt="Marvel Logo"></img>
        <div className={styles.lineNavBar}></div>

        <form className={styles.searchBar}>
          <input
            type="text"
            name="query"
            className={styles.searchInput}
            placeholder="Search characters..."
            onChange={this.handleChange}
          />
          <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
        </form>

        <h2 style={{ color: theme.letter, fontWeight: theme.weight }} className={styles.clickForInfoTxt}>
          Click each card for comic appearances!
        </h2>

        <button className={styles.themeBtn} onClick={toggleTheme}>
          Change Theme
        </button>

        <h3
          style={{ color: theme.letter, fontWeight: theme.weight }}
          className={styles.favList}
          onClick={this.props.favListToggleFn}
        >
          Favourites
        </h3>  

      </div>
    );
  }
}

export default SearchBar;
