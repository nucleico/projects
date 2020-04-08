import React, { Component } from 'react';
import '../styles/styles.css';
import Logo from '../img/marvellogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBar extends Component {
  handleChange = (event) => {
    this.props.getCharacter(event.target.value);
  };
  render() {
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
      </div>
    );
  }
}

export default SearchBar;
