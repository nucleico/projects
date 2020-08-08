import React from 'react';
import styles from '../styles/card.module.scss';
import BackCard from './BackCard';
import { connect } from 'react-redux';
import { getComics, setLoading } from '../actions/dataActions';

const Card = ({
  personajeData,
  getComics,
  isLightTheme,
  themes,
  setLoading,
}) => {
  const getComicsHandle = () => {
    setLoading();
    getComics(personajeData.id);
  };

  const theme = isLightTheme ? themes.light : themes.dark;

  return (
    <div
      onClick={getComicsHandle}
      className={styles.card}
      style={{ '--shadowElementColor': theme.shadowElement }}
    >
      <div className={styles.innerCard}>
        <div className={styles.frontCard}>
          <h1 className={styles.name}>{personajeData.name}</h1>
          <img
            className={styles.personajeImg}
            src={`${personajeData.thumbnail.path}.${personajeData.thumbnail.extension}`}
            alt="personaje"
          ></img>
        </div>

        <div>
          <BackCard personajeData={personajeData} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLightTheme: state.data.isLightTheme,
  themes: state.data.themes,
});

export default connect(mapStateToProps, { getComics, setLoading })(Card);
