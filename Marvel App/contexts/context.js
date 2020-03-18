import React, { createContext, Component } from 'react';
import axios from 'axios';
export const Context = createContext();

class ContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personajeName: [],
      personajeImg: [],
      characterId: [],
      title: [],
      comicImg: [],
      toggleComic: false
    };
    this.getComics = this.getComics.bind(this);
  }

  async getCharacter(query) {
    if (query) {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=6f44abf169878c0d274e18fd74271fe3&hash=e08061f3544ab0998b879bc0db6d4a01`
        );
        const [...data] = await response.data.data.results;
        const names = data.map(name => {
          return name.name;
        });
        const images = data.map(name => {
          return `${name.thumbnail.path}.${name.thumbnail.extension}`;
        });
        const id = data.map(name => {
          return name.id;
        });

        this.setState({
          personajeName: names,
          personajeImg: images,
          results: false,
          characterId: id
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      this.setState({
        personajeName: [],
        personajeImg: [],
        results: true
      });
    }
  }

  handleChange = event => {
    this.getCharacter(event.target.value);
  };

  async getComics(characterId) {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters/${characterId}/comics?ts=1&apikey=6f44abf169878c0d274e18fd74271fe3&hash=e08061f3544ab0998b879bc0db6d4a01`
      );
      const [...data] = await response.data.data.results;
      const title = data.map(name => {
        return name.title;
      });

      const comicImg = data.map(name => {
        return `${name.thumbnail.path}.${name.thumbnail.extension}`;
      });

      const id = data.map(name => {
        return name.id;
      });

      this.setState({
        title: title,
        comicImg: comicImg,
        characterId: id,
        toggleComic: true
      });
    } catch (error) {
      console.error(error);
    }
  }

  eraseData = () => {
    this.setState({
      toggleComic: false,
      characterId: [],
      title: [],
      comicImg: []
    });
  };
  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          getCharacter: this.getCharacter,
          handleChange: this.handleChange,
          getComics: this.getComics,
          eraseData: this.eraseData
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default ContextProvider;
