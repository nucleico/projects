import React from 'react';
import Logo from '../../img/marvellogo.png';
import { connect } from 'react-redux';
import {
  getCharacter,
  favListToggle,
  toggleTheme,
} from '../../actions/dataActions';

const SearchBar = ({
  favListToggle,
  getCharacter,
  toggleTheme,
  isLightTheme,
  themes,
}) => {
  const onChange = (event) => {
    getCharacter(event.target.value);
  };

  const theme = isLightTheme ? themes.light : themes.dark;

  return (
    <div style={{ backgroundColor: theme.navBack }} className="navBar">
      <img src={Logo} className="marvelLogo" alt="Marvel Logo"></img>
      <div className="lineNavBar"></div>

      <form className="searchBar">
        <input
          type="text"
          name="query"
          className="searchInput"
          placeholder="Search characters..."
          onChange={onChange}
        />
        <i className={`$searchIcon} fas fa-search`} />
      </form>

      <h2
        style={{ color: theme.letter, fontWeight: theme.weight }}
        className="clickForInfoTxt"
      >
        Click on each card for comic appearances!
      </h2>

      <button className="themeBtn" onClick={toggleTheme}>
        Change Theme
      </button>

      <h3
        style={{ color: theme.letter, fontWeight: theme.weight }}
        className="favList"
        onClick={favListToggle}
      >
        Favourites
      </h3>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLightTheme: state.data.isLightTheme,
  themes: state.data.themes,
});

export default connect(mapStateToProps, {
  toggleTheme,
  getCharacter,
  favListToggle,
})(SearchBar);
