import React, { Component } from 'react';
import '../styles/styles.css';
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
          removeFavList={this.props.removeFavList}
        /> 
      );
    });
    return (
      <div style={{ backgroundColor: theme.navBack }} className="navBar">
        <img src={Logo} className="marvelLogo" alt="Marvel Logo"></img>

        <div id="lineNavBar"></div>
        <form className="searchBar">
          <input
            type="text"
            name="query"
            id="searchInput"
            placeholder="Search characters..."
            onChange={this.handleChange}
          />
          <FontAwesomeIcon icon={faSearch} className="searchIcon" />
        </form>

        <h2 style={{ color: theme.letter }} className="clickForInfoTxt">
          Click each card for comic appearances!
        </h2>
        <button className="themeBtn" onClick={toggleTheme}>
          Change Theme
        </button>
        <h3
          style={{ color: theme.letter }}
          className="favList"
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
            className="favContainer"
          >
            <button
              style={{ color: theme.letter }}
              className="xBtn"
              onClick={this.props.favListToggleFn}
            >
              X
            </button>
            <h2 style={{ color: theme.letter }} id="favWord">
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
