import React from 'react';
import styles from '../styles/searchbar.module.scss';
import Logo from '../img/marvellogo.png';
import { connect } from "react-redux"
import { getCharacter, favListToggle, toggleTheme } from '../actions/dataActions';

const SearchBar = ( {favListToggle, getCharacter, toggleTheme, isLightTheme, themes}) => {

 const onChange = (event) => {
    getCharacter(event.target.value);
  };
 
  const theme = isLightTheme ? themes.light : themes.dark;

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

  const mapStateToProps = (state) => ({    
    isLightTheme: state.data.isLightTheme,
    themes: state.data.themes,
  })


export default connect(mapStateToProps, {toggleTheme, getCharacter, favListToggle})(SearchBar);
