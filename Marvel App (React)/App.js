import React, { Component } from 'react';
import './styles/styles.css';
import CardList from './components/CardList';
import ComicList from './components/ComicList';
import SearchBar from './components/SearchBar';
import axios from 'axios';

class App extends Component {
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
    };
    this.getComics = this.getComics.bind(this);
    this.getCharacter = this.getCharacter.bind(this);
  }

  async getCharacter(query) {
    if (query) {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=6f44abf169878c0d274e18fd74271fe3&hash=e08061f3544ab0998b879bc0db6d4a01`
        );
        const [...data] = await response.data.data.results;
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
  }

  async getComics(characterId) {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters/${characterId}/comics?ts=1&apikey=6f44abf169878c0d274e18fd74271fe3&hash=e08061f3544ab0998b879bc0db6d4a01`
      );
      const [...data] = await response.data.data.results;
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
  }

  eraseData = () => {
    this.setState({
      toggleComic: false,
      comicsId: [],
      comicTitle: [],
      comicImg: [],
    });
  };

  render() {
    return (
      <div>
        <SearchBar getCharacter={this.getCharacter} />
        <CardList
          personajeName={this.state.personajeName}
          personajeImg={this.state.personajeImg}
          characterId={this.state.characterId}
          toggleComic={this.state.toggleComic}
          comicImg={this.state.comicImg}
          comicTitle={this.state.comicTitle}
          eraseData={this.eraseData}
          getComics={this.getComics}
          comicId={this.comicId}
        />
        {this.state.toggleComic ? (
          <ComicList
            comicTitle={this.state.comicTitle}
            comicImg={this.state.comicImg}
            eraseData={this.eraseData}
          />
        ) : (
          ''
        )}
        <h4>Data provided by Marvel. © 2014 Marvel.</h4>
      </div>
    );
  }
}

export default App;
