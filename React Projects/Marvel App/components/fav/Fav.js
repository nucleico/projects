import React from 'react';
import { connect } from 'react-redux';

const Fav = ({ favsData, themes, isLightTheme }) => {
  const theme = isLightTheme ? themes.light : themes.dark;
  return (
    <div className="comicListContainer">
      <div className="imgTable">
        <img
          src={favsData.im}
          className="imagenComic"
          alt="imagen character"
        ></img>
      </div>

      <div
        style={{ color: theme.letter, fontWeight: theme.weight }}
        className="comicCharacter"
      >
        {favsData.ch}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLightTheme: state.data.isLightTheme,
  themes: state.data.themes,
});

export default connect(mapStateToProps)(Fav);
