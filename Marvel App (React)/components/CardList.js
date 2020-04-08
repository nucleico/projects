import React, { Component } from 'react';
import '../styles/styles.css';
import Card from './Card';

class CardList extends Component {
  render() {
    const { personajeImg, characterId, getComics, personajeName } = this.props;
    const cardComponent = personajeName.map((u, i) => {
      return (
        <Card
          personajeName={personajeName[i]}
          getComics={() => getComics(characterId[i])}
          personajeImg={personajeImg[i]}
          key={characterId[i]}
        />
      );
    });

    return (
      <div>
        <div className="grid">{cardComponent} </div>{' '}
      </div>
    );
  }
}

export default CardList;