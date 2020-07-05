import React, { Component } from 'react';
import '../styles/styles.css';
import Stats from './Stats';
import { ThemeContext } from '../context/ThemeContext';

class Card extends Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {           
      powerPoints: Math.ceil(Math.random() * 98),
      speedPoints: Math.ceil(Math.random() * 98),
      resPoints: Math.ceil(Math.random() * 98),
    };
  }
  render() {
    const { personajeName, personajeImg, getComics, removeFavList, addFavList } = this.props;
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      
        <div
          onClick={getComics}         
          className="card"
          style={{ "--shadowElementColor": theme.shadowElement }}          
        >
          <div className="innerCard">
            <div className="frontCard">        
          <h1 className="name">{personajeName}</h1>
          <img
            className="personajeImg"
            src={personajeImg}
            alt="personaje"
          ></img>

          </div>

        <div>          
            <Stats
              personajeName={personajeName}
              personajeImg={personajeImg}
              removeFavList={removeFavList}
              powerPoints={this.state.powerPoints}
              speedPoints={this.state.speedPoints}
              resPoints={this.state.resPoints}
              addFavList={addFavList}
            />         
           </div>
          </div>
        </div>      
    );
  }
}

export default Card;
