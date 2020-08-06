import React, { useContext } from 'react';
import styles from '../styles/searchbar.module.scss';
import Logo from '../img/marvellogo.png';
import { ThemeContext } from '../context/ThemeContext';
import { connect } from "react-redux"
import { getCharacter, favListToggle } from '../actions/dataActions';

const SearchBar = ( {favListToggle, getCharacter}) => {
  
  // static contextType = ThemeContext;  
  const themeContext = useContext(ThemeContext)  

 const onChange = (event) => {
    getCharacter(event.target.value);
  };
 
  const { isLightTheme, light, dark, toggleTheme } = themeContext;
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
            onChange={onChange}
          />
          <i className={`${styles.searchIcon} fas fa-search`}/>         
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
          onClick={favListToggle}
        >
          Favourites
        </h3>  

      </div>
    );
  }


export default connect(null, {getCharacter, favListToggle})(SearchBar);
