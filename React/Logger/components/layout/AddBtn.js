import React from 'react';

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-shot-modal"
        className="btn-floating btn-large blue darken-2 modal-trigger btn tooltipped"
        data-position="left"
        data-tooltip="Agregar tiro"
      >
        <i className="large material-icons">add</i>
      </a>

      <ul>
        <li>
          <a
            href="#players-modal"
            className="btn-floating green modal-trigger btn tooltipped"
            data-position="left"
            data-tooltip="Ver jugadores y estadísticas"
          >
            <i className="material-icons">person</i>
          </a>
        </li>
        <li>
          <a
            href="#add-player-modal"
            className="btn-floating red modal-trigger btn tooltipped"
            data-position="left"
            data-tooltip="Agregar jugador"
          >
            <i className="material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
