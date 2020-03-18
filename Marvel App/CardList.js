import React, { Component } from 'react';
import './styles/styles.css';
import Card from './Card';
import ComicList from './ComicList';
import { Context } from './contexts/context';
import ContextProvider from './contexts/context';

class CardList extends Component {
  static contextType = Context;

  render() {
    const { eraseData, title, comicImg, getComics, toggleComic } = this.context;
    const { comic, personaje, imagen, id } = this.props;
    const cardComponent = this.props.personaje.map((u, i) => {
      return (
        <ContextProvider key={i}>
          <Card
            comic={comic}
            personaje={personaje[i]}
            clicked={() => getComics(id[i])}
            imagen={imagen[i]}
            key={id[i]}
          />
        </ContextProvider>
      );
    });

    return (
      <div>
        <div className="grid">{cardComponent} </div>{' '}
        {toggleComic ? (
          <ContextProvider>
            <ComicList
              id={id}
              erase={eraseData}
              title={title}
              comicImg={comicImg}
            />{' '}
          </ContextProvider>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default CardList;
