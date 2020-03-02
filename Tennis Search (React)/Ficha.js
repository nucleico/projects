import React, { Component } from 'react';

class Ficha extends Component {
  constructor() {
    super();
    this.state = {
      bioChange: false
    };
  }

  render() {
    const changeBio = () => {
      this.setState({ bioChange: !this.state.bioChange });
    };

    return (
      <div
        onMouseEnter={changeBio}
        onMouseLeave={changeBio}
        className="grow bw2 shadow-5 card"
      >
        <img alt="players" src={this.props.id} />
        <div>
          <h2>{this.props.name}</h2>
          {this.state.bioChange ? (
            <div>
              <div>Country: {this.props.country}</div>
              <div className="bio">Skill: {this.props.skill}</div>
              <div>Best Ranking: {this.props.ranking}</div>
            </div>
          ) : (
            ' '
          )}
        </div>
      </div>
    );
  }
}

export default Ficha;
