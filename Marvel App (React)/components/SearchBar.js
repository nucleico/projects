import React, { Component } from 'react';
import '../styles/styles.css';
import Logo from '../img/marvellogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import FavList from './FavList';

class SearchBar extends Component {
  handleChange = (event) => {
    this.props.getCharacter(event.target.value);
  };
  render() {
    const favListComponent = this.props.favCharacters.map((el, i) => {
      return (
        <FavList
          favCharacters={this.props.favCharacters[i]}
          favCharacterImg={this.props.favCharacterImg[i]}
        />
      );
    });
    return (
      <div className="navBar">
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
        <h3 className="favList" onClick={this.props.favListToggleFn}>
          Favourites
        </h3>

        {this.props.favListToggle ? (
          <div className="favContainer">
            <button onClick={this.props.favListToggleFn}>X</button>
            <h2 id="favWord">Favourite List</h2>
            {favListComponent}
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default SearchBar;
