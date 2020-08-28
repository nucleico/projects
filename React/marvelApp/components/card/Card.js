import React from 'react';
import BackCard from './BackCard';
import { connect } from 'react-redux';
import { getComics, setLoading } from '../../actions/dataActions';

const Card = ({
  personajeData,
  getComics,
  isLightTheme,
  themes,
  setLoading,
  id,
}) => {
  const getComicsHandle = () => {
    setLoading();
    getComics(personajeData.id);
  };

  const theme = isLightTheme ? themes.light : themes.dark;

  return (
    <div
      onClick={getComicsHandle}
      className="card"
      style={{ '--shadowElementColor': theme.shadowElement }}
    >
      <div className="innerCard">
        <div className="frontCard">
          <h1 className="name">{personajeData.name}</h1>
          <img
            className="personajeImg"
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
