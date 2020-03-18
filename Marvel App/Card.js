import React from 'react';
import './styles/styles.css';

const Card = props => {
  const { personaje, imagen, clicked } = props;
  return (
    <div onClick={clicked} className="card">
      <h1 className="name">{personaje}</h1>
      <img className="personajeImg" src={imagen} alt="personaje"></img>
    </div>
  );
};

export default Card;
