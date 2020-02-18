import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { tennisPlayers } from './tennisPlayers';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tennisPlayers: tennisPlayers,
      busqueda: ''
    };
  }

  onSearchChange = event => {
    console.log(event.target.value);
    this.setState({ busqueda: event.target.value });
  };

  render() {
    const tenistasFiltrados = this.state.tennisPlayers.filter(player => {
      return player.name
        .toLowerCase()
        .includes(this.state.busqueda.toLowerCase());
    });

    return (
      <div className="tc">
        <h1> Tennis Players</h1>
        <SearchBox searchChange={this.onSearchChange} />

        <CardList tenistas={tenistasFiltrados} />
      </div>
    );
  }
}

export default App;
