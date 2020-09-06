import React, { useState, useRef } from 'react';
import { addPlayer } from '../../actions/basketActions';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddPlayerModal = ({ addPlayer, players }) => {
  const [nombre, setNombre] = useState('');
  const [legajo, setLegajo] = useState('');
  const [errorName, setErrorName] = useState(false);
  const [errorLegajo, setErrorLegajo] = useState(false);
  const modalRef = useRef(null);

  const onSubmit = (e) => {
    let modal = M.Modal.getInstance(modalRef.current);
    modal.options.onCloseEnd = function () {
      setErrorLegajo(false);
      setErrorName(false);
      setNombre('');
      setLegajo('');
    };

    const newPlayer = { nombre, legajo };

    if (players.find((pl) => pl.legajo === legajo) && (players.find((pl) => pl.nombre === nombre))) {
      setErrorLegajo(true);
      setErrorName(true);
    } else if (players.find((pl) => pl.nombre === nombre)) {
      setErrorName(true);
      setErrorLegajo(false);
    } else if (players.find((pl) => pl.legajo === legajo)) {
      setErrorLegajo(true);
      setErrorName(false);
    } else {
      try {
        addPlayer(newPlayer);
        M.toast({ html: 'Jugador agregado correctamente' });
        setNombre('');
        setLegajo('');
        setErrorLegajo(false);
        setErrorName(false);
        modal.close();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div id="add-player-modal" className="modal" ref={modalRef}>
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
              onChange={(e) => setNombre(e.target.value)}
              className={errorName ? 'invalid' : ''}
            />
            <label htmlFor="message" className="active">
              Nombre
            </label>
            <span
              className="helper-text"
              data-error="El jugador ya existe"
            ></span>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={legajo}
              onChange={(e) => setLegajo(e.target.value)}
              className={errorLegajo ? 'invalid' : ''}
            />
            <label htmlFor="message" className="active">
              Legajo
            </label>
            <span
              className="helper-text"
              data-error="El legajo ya existe"
            ></span>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <button
          onClick={onSubmit}
          className="waves-effect blue waves-light btn"
        >
          Confirmar
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  players: state.basket.players,
});

export default connect(mapStateToProps, { addPlayer })(AddPlayerModal);
