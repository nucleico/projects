import React from 'react';
import { connect } from 'react-redux';
import { deleteShot, setCurrentPlayer } from '../../actions/basketActions';

const ShotItem = ({ shot, deleteShot, currentPlayer, setCurrentPlayer }) => {
  const onDeleteHandler = () => {
    deleteShot(shot.id);   
    currentPlayer.length > 0 && shot.idShooter === currentPlayer[0].idShooter && setCurrentPlayer(shot.idShooter)  
  
  };

  return (
    <div className="collection-item shotContainer">
      <div style={{display: "flex", textAlign: "center"}} className="shotList">

        <div style={{width: "200px", fontWeight: "900" }} className="black-text">
          <strong>Jugador: </strong> {shot.shooter}
        </div>
        <div style={{ width: '180px', fontWeight: "900"}} className="black-text">
          <strong>Distancia: </strong> {shot.distance} mts
        </div>
        <div style={{ width: '180px', fontWeight: "900"}}>
        <strong>Anotó: </strong>{' '}
        <i
          style={{ width: '20px' }}
          className={`black-text ${
            shot.scored === 'No' ? 'fas fa-times' : 'fas fa-check'
          }`}
        />
        </div>
        <div className="black-text"  style={{ width: '280px', fontWeight: "900" }}>
          <strong>Posición: </strong> {shot.position}
        </div>
        <a
          href="#!"
          style={{ position: 'absolute', right: "20px" }}
          className="secondary-content"
        >
          <i
            onClick={onDeleteHandler}
            className="material-icons grey-text"
            title="Borrar tiro"
          >
            delete
          </i>
        </a>

      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  currentPlayer: state.basket.currentPlayerShots
})

export default connect(mapStateToProps, { deleteShot, setCurrentPlayer })(ShotItem);
