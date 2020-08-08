import React from 'react';
import styles from '../styles/fav.module.scss';
import { connect } from 'react-redux';

const Fav = ({ favsData, themes, isLightTheme }) => {
  const theme = isLightTheme ? themes.light : themes.dark;
  return (
    <div className={styles.comicListContainer}>
              <div className={styles.imgTable}>
              <img
                src={favsData.im}
                className={styles.imagenComic}
                alt="imagen character"></img>
              </div>

              <div style={{ color: theme.letter, fontWeight: theme.weight }}
              className={styles.comicCharacter}>
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
