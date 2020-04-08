import React from 'react';
import '../styles/styles.css';

const Card = (props) => {
  const { personajeName, personajeImg, getComics } = props;
  return (
    <div onClick={getComics} className="card">
      <h1 className="name">{personajeName}</h1>
      <img className="personajeImg" src={personajeImg} alt="personaje"></img>
    </div>
  );
};

export default Card;
