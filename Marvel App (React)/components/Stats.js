import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons';

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleFav: false      
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


  render() {
    return (
      <div className="statsContainer">
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
        <h2 className="nameBackCard">Name: {this.props.personajeName}</h2>
        <div className="statsAtt">
          <h2>
            Strength:{' '}
            <div className="attrBar">
              <div
                className="pointsBar"
                style={{ width: this.props.powerPoints }}
              ></div>
            </div>
          </h2>

          <h2>
            Speed:{' '}
            <div className="attrBar">
              <div
                className="pointsBar"
                style={{ width: this.props.speedPoints }}
              ></div>
            </div>
          </h2>

          <h2>
            Resistance:{' '}
            <div className="attrBar">
              <div
                className="pointsBar"
                style={{ width: this.props.resPoints }}
              ></div>
            </div>
          </h2>
        </div>
      </div>
    );
  }
}


export default Stats;
