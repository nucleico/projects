import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ShotItem from './ShotItem';
import { getData } from '../../actions/basketActions';

const ShotsList = ({ getData, shots }) => {
  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div>
      <ul className="collection with-header">
        <li
         
          className="collection-header blue-grey"
        >
          <h4 className="center white-text shotsTitle">Información sobre disparos</h4>
        </li>
        {shots.length === 0 ? (
          <p className="center">No hay tiros para mostrar</p>
        ) : (
          shots.map((shot) => <ShotItem shot={shot} key={shot.id} />)
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  shots: state.basket.shots,
});

export default connect(mapStateToProps, { getData })(ShotsList);
