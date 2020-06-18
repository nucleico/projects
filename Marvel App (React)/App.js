import React, { Component } from 'react';
import './styles/styles.css';
import CardList from './components/CardList';
import ComicList from './components/ComicList';
import SearchBar from './components/SearchBar';
import axios from 'axios';
import { ThemeContext } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';

class App extends Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {
      personajeName: [],
      comicsId: [],
      personajeImg: [],
      characterId: [],
      comicTitle: [],
      comicImg: [],
      toggleComic: false,
      favCharacters: [],
      favCharacterImg: [],
      favListToggle: false,
      toggleFav: false,
    };
  }

  getCharacter = async (query) => {
    if (query) {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=6f44abf169878c0d274e18fd74271fe3&hash=e08061f3544ab0998b879bc0db6d4a01`
        );
        const data = response.data.data.results;

        const names = data.map((name) => {
          return name.name;
        });
        const images = data.map((name) => {
          return `${name.thumbnail.path}.${name.thumbnail.extension}`;
        });
        const id = data.map((name) => {
          return name.id;
        });

        this.setState({
          personajeName: names,
          personajeImg: images,
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

      const title = data.map((name) => {
        return name.title;
      });

      const comicImg = data.map((name) => {
        return `${name.thumbnail.path}.${name.thumbnail.extension}`;
      });

      const id = data.map((name) => {
        return name.id;
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
          favListToggleFn={this.favListToggleFn}
          favListToggle={this.state.favListToggle}
          getCharacter={this.getCharacter}
          favCharacters={this.state.favCharacters}
          favCharacterImg={this.state.favCharacterImg}
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
              comicTitle={this.state.comicTitle}
              comicImg={this.state.comicImg}
              eraseData={this.eraseData}
            />
          ) : (
            ''
          )}{' '}
        </AnimatePresence>
        <h4 style={{ color: theme.letter, fontWeight: theme.weight }}>
          Data provided by Marvel. © 2014 Marvel.
        </h4>
      </div>
    );
  }
}

export default App;
