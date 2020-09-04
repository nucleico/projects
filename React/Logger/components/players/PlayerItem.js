import React from 'react';
import { connect } from 'react-redux';
import {
  deletePlayer,
  setStatsToggle,
  setCurrentPlayer,
} from '../../actions/basketActions';

const PlayerItem = ({
  player,
  deletePlayer,
  setStatsToggle,
  setCurrentPlayer,
}) => {
  const onDeleteHandler = (id) => {
    deletePlayer(id);
  };

  const statsHandler = () => {
    setStatsToggle(true);
    setCurrentPlayer(player.id);
  };

  return (
    <div>
      <li className="collection-item">
        <div>
          <strong>Nombre: </strong> {player.nombre} - <strong>Legajo: </strong>{' '}
          {player.legajo}
          <a href="#!" className="secondary-content">
            <i
              onClick={statsHandler}
              className="material-icons grey-text"
              title="Mostrar estadísticas"
            >
              insert_chart
            </i>
            <i
              onClick={() => onDeleteHandler(player.id)}
              className="material-icons grey-text"
              title="Borrar jugador"
            >
              delete
            </i>
          </a>
        </div>
      </li>
    </div>
  );
};

export default connect(null, {
  deletePlayer,
  setStatsToggle,
  setCurrentPlayer,
})(PlayerItem);
