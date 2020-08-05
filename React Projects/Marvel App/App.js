import React, { Component } from 'react';
import './styles/styles.css';
import axios from 'axios';
import { ThemeContext } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';
import CardList from './components/CardList';
import ComicList from './components/ComicList';
import SearchBar from './components/SearchBar';
import FavList from './components/FavList';

class App extends Component {
  static contextType = ThemeContext;

  state = {
    personajeName: [],
    personajeImg: [],
    characterId: [],
    comicTitle: [],
    comicImg: [],
    comicsId: [],
    toggleComic: false,
    favCharacters: [],
    favCharacterImg: [],   
    favListToggle: false, 
  };

  getCharacter = async (query) => {
    if (query) {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=6f44abf169878c0d274e18fd74271fe3&hash=e08061f3544ab0998b879bc0db6d4a01`
        );
        const data = response.data.data.results;

        let names = [];
        let img = [];
        let id = [];

        data.forEach((name) => {
          names.push(name.name);
          img.push(`${name.thumbnail.path}.${name.thumbnail.extension}`);
          id.push(name.id);
        });

        this.setState({
          personajeName: names,
          personajeImg: img,
          characterId: id,
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      this.setState({
        personajeName: [],
        personajeImg: [],
      });
    }
  };

  getComics = async (characterId) => {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters/${characterId}/comics?ts=1&limit=50&apikey=6f44abf169878c0d274e18fd74271fe3&hash=e08061f3544ab0998b879bc0db6d4a01`
      );
      const data = response.data.data.results;

      let title = [];
      let comicImg = [];
      let id = [];

      data.forEach((name) => {
        title.push(name.title);
        comicImg.push(`${name.thumbnail.path}.${name.thumbnail.extension}`);
        id.push(name.id);
      });

      this.setState({
        comicTitle: title,
        comicImg: comicImg,
        comicsId: id,
        toggleComic: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  eraseData = () => {
    this.setState({
      toggleComic: false,
      comicsId: [],
      comicTitle: [],
      comicImg: [],
    });
  };

  addFavList = (ch, im) => {
    this.setState({
      favCharacters: [...this.state.favCharacters, ch],
      favCharacterImg: [...this.state.favCharacterImg, im],
    });
  };

  removeFavList = (ch, im) => {
    const favCharactersUpdated = this.state.favCharacters.filter(
      (item) => item !== ch
    );
    const favImgUpdated = this.state.favCharacterImg.filter(
      (item) => item !== im
    );

    this.setState({
      favCharacters: favCharactersUpdated,
      favCharacterImg: favImgUpdated,
    });
  }; 

  favListToggleFn = () => {
    this.setState({
      favListToggle: !this.state.favListToggle,
    });
  };

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    document.body.style.backgroundColor = theme.back;

    return (
      <div>
        <SearchBar         
          getCharacter={this.getCharacter}
          favCharacters={this.state.favCharacters}
          favCharacterImg={this.state.favCharacterImg} 
          favListToggleFn={this.favListToggleFn}         
        />

        <CardList
          personajeName={this.state.personajeName}
          personajeImg={this.state.personajeImg}
          characterId={this.state.characterId}
          getComics={this.getComics}
          removeFavList={this.removeFavList}
          addFavList={this.addFavList}
          favCharacters={this.state.favCharacters}
          favCharacterImg={this.state.favCharacterImg}
        />

        <AnimatePresence>
          {this.state.toggleComic ? (
            <ComicList
              toggleComic={this.state.toggleComic}
              comicTitle={this.state.comicTitle}
              comicImg={this.state.comicImg}
              eraseData={this.eraseData}
            />
          ) : (
            ''
          )}
        </AnimatePresence>

        <AnimatePresence>
          {this.state.favListToggle ? (
          <FavList          
            favCharacters={this.state.favCharacters} 
            favCharacterImg={this.state.favCharacterImg}  
            favListToggleFn={this.favListToggleFn}         
        />) : ''} </AnimatePresence>
      </div>
    );
  }
}

export default App;
