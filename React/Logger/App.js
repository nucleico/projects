import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';

import AddPlayerModal from './components/players/AddPlayerModal';
import ShotsList from './components/shots/ShotsList';
import PlayerListModal from './components/players/PlayerListModal';
import AddShotsModal from './components/shots/AddShotsModal';
import AddBtn from './components/layout/AddBtn';
import PositionDonut from './components/stats/PositionDonut';
import ScoredDonut from './components/stats/ScoredDonut';
import DistanceStat from './components/stats/DistanceStat';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <AddBtn />
      <div className="container">
        <ShotsList />
        <AddPlayerModal />
        <AddShotsModal />
        <PlayerListModal />
      </div>
      <div className="container">
      <div className="row"> 
      <div className="col s6"> <PositionDonut /></div>
      <div className="col s6">  <ScoredDonut/></div> 
      <div className="row"> 
      <div className="col s6"> <DistanceStat /></div>
      </div>   
      </div> 
      
      </div>
    </Provider>
  );
};

export default App;
