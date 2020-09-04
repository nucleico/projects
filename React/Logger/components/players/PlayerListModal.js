import React from 'react';
import { connect } from 'react-redux';
import PlayerItem from './PlayerItem';

const PlayerListModal = ({ players }) => {  

  return (
    <div id="players-modal" className="modal">
      <div className="modal-content">
        <h4>Lista de Jugadores</h4>
        <ul className="collection">
          {players == null ? (
            <h4
              style={{
                margin: '25px 25px',
                fontSize: '25px',
                textAlign: 'center',
              }}
            >
              {' '}
              No hay jugadores registrados{' '}
            </h4>
          ) : (
            players.map((p) => <PlayerItem player={p} key={p.id} />)
          )}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  players: state.basket.players,
});

export default connect(mapStateToProps)(PlayerListModal);
