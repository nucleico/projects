import React, { Component } from 'react';
import './styles/styles.css';
import CardList from './CardList';
import Logo from './img/marvellogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ContextProvider from './contexts/context';
import { Context } from './contexts/context';

class App extends Component {
  static contextType = Context;

  render() {
    const {
      handleChange,
      personajeName, //g
      personajeImg,
      characterId
    } = this.context;
    return (
      <div>
        <div className="navBar">
          <img src={Logo} className="marvelLogo" alt="Marvel Logo"></img>

          <div id="lineNavBar"></div>
          <form className="searchBar">
            <input
              type="text"
              name="query"
              id="searchInput"
              placeholder="Search characters..."
              onChange={handleChange}
            />
            <FontAwesomeIcon icon={faSearch} className="searchIcon" />
          </form>
        </div>
        <ContextProvider>
          <CardList
            personaje={personajeName}
            imagen={personajeImg}
            id={characterId}
          />
        </ContextProvider>
        <h4>Data provided by Marvel. © 2014 Marvel.</h4>
      </div>
    );
  }
}

export default App;
