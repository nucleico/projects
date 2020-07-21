import React, { Component } from 'react';
import styles from '../styles/cardlist.module.scss';
import { ThemeContext } from '../context/ThemeContext';
import Card from './Card';

class CardList extends Component {

  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    const { personajeImg, characterId, getComics, personajeName } = this.props;
    const cardComponent = personajeName.map((u, i) => {
      return (
        <Card
          personajeName={personajeName[i]}
          getComics={() => getComics(characterId[i])}
          personajeImg={personajeImg[i]}
          key={characterId[i]}
          addFavList={this.props.addFavList}
          removeFavList={this.props.removeFavList}
          favCharacters={this.props.favCharacters}
          favCharacterImg={this.props.favCharacterImg}
          toggleFav={this.props.toggleFav}
        />
      );
    });

    return (
      <div>
        <div className={styles.grid}>{cardComponent} </div>
        <h4 style={{ color: theme.letter, fontWeight: theme.weight }}>
          Data provided by Marvel. © 2014 Marvel.
        </h4>        
      </div>
    );
  }
}

export default CardList;
