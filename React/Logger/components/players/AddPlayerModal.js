import React, { useState } from 'react';
import { addPlayer } from '../../actions/basketActions';
import { connect } from 'react-redux';

const AddPlayerModal = ({ addPlayer, players }) => {
  const [nombre, setNombre] = useState('');
  const [legajo, setLegajo] = useState('');

  const onSubmit = async () => {    
    const newPlayer = { nombre, legajo };
    if (players.find(pl => pl.legajo === legajo)) {
      alert("Ya existe un jugador con ese legajo")
      setNombre('');
      setLegajo('');
    } else {
    try {
      addPlayer(newPlayer);      
      setNombre('');
      setLegajo('');
    } catch (err) {
      console.error(err);
    }
  }
  };

  const playerNameHandler = (e) => {
    let regex = /\d/g;
    if (e.target.value !== '' && regex.test(e.target.value)) {
      alert('El nombre no puede incluir números');
    } else {
      setNombre(e.target.value);
    }
  };

  const legajoHandler = (e) => {
    if (e.target.value !== '' && !Number(e.target.value)) {
      alert('El legajo solo puede incluir números');
    } else {
      setLegajo(e.target.value);
    }
  };

  return (
    <div id="add-player-modal" className="modal">
      <div className="modal-content">
        <h4 style={{ marginBottom: '30px', fontSize: '25px' }}>
          {' '}
          Agregar Jugador
        </h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={nombre}
              onChange={playerNameHandler}
            />
            <label htmlFor="message" className="active">
              Nombre
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={legajo}
              onChange={legajoHandler}
            />
            <label htmlFor="message" className="active">
              Legajo
            </label>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <button
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Confirmar
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  players: state.basket.players
})

export default connect(mapStateToProps, { addPlayer })(AddPlayerModal);
