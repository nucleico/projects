import React, { Component } from 'react';
import '../styles/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons';
import Stats from './Stats';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleFav: false,
      toggleStats: false,
      powerPoints: Math.ceil(Math.random() * 98),
      speedPoints: Math.ceil(Math.random() * 98),
      resPoints: Math.ceil(Math.random() * 98),
    };
  }

  makeFav = (e) => {
    e.stopPropagation();
    this.setState({ toggleFav: !this.state.toggleFav });
    if (!this.state.toggleFav) {
      this.props.addFavList(this.props.personajeName, this.props.personajeImg);
    } else {
      this.props.removeFavList(
        this.props.personajeName,
        this.props.personajeImg
      );
    }
  };

  openStats = () => {
    this.setState({
      toggleStats: true,
    });
  };

  closeStats = () => {
    this.setState({
      toggleStats: false,
    });
  };

  render() {
    const { personajeName, personajeImg, getComics } = this.props;
    return (
      
        <div
          onClick={getComics}
          onMouseEnter={this.openStats}
          onMouseLeave={this.closeStats}
          className="card"
        >
          {this.state.toggleFav ? (
            <FontAwesomeIcon
              icon={heartSolid}
              className="favIcon"
              onClick={this.makeFav}
            />
          ) : (
            <FontAwesomeIcon
              icon={heartRegular}
              className="favIcon"
              onClick={this.makeFav}
            />
          )}
          <h1 className="name">{personajeName}</h1>
          {this.state.toggleStats ? (
            <Stats
              powerPoints={this.state.powerPoints}
              speedPoints={this.state.speedPoints}
              resPoints={this.state.resPoints}
            />
          ) : (
            ''
          )}
          <img
            className="personajeImg"
            src={personajeImg}
            alt="personaje"
          ></img>
        </div>      
    );
  }
}

export default Card;
