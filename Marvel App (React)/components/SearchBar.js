import React, { Component } from 'react';
import styles from '../styles/searchbar.module.scss';
import Logo from '../img/marvellogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import FavList from './FavList';
import { ThemeContext } from '../context/ThemeContext';
import { motion, AnimatePresence } from "framer-motion"

class SearchBar extends Component {
  static contextType = ThemeContext;
  handleChange = (event) => {
    this.props.getCharacter(event.target.value);
  };
  render() {
    const { isLightTheme, light, dark, toggleTheme } = this.context;
    const theme = isLightTheme ? light : dark;
    const favListComponent = this.props.favCharacters.map((el, i) => {
      return (
       
        <FavList
          favCharacters={this.props.favCharacters[i]}
          favCharacterImg={this.props.favCharacterImg[i]}          
        /> 
      );
    });
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
        <AnimatePresence>
        {this.props.favListToggle ? (
          
          <motion.div initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{ duration: 0.5 }}
          exit={{opacity: 0}}
            style={{ backgroundColor: theme.comicBack }}
            className={styles.favContainer}
          >
            <button
              style={{ color: theme.letter }}
              className={styles.xBtn}
              onClick={this.props.favListToggleFn}
            >
              X
            </button>
            <h2 style={{ color: theme.letter, fontWeight: theme.weight }} className={styles.favWord}>
              Favourite List
            </h2>
            {favListComponent}
          </motion.div> 
        ) : (
          ''
        )} </AnimatePresence>
      </div>
    );
  }
}

export default SearchBar;
