import React, { useContext } from 'react';
import styles from '../styles/card.module.scss';
import BackCard from './BackCard';
import { ThemeContext } from '../context/ThemeContext';
import { connect } from "react-redux"
import { getComics } from "../actions/dataActions"

const Card = ({personajeData, getComics}) => {
  
  const themeContext = useContext(ThemeContext)
    const { isLightTheme, light, dark } = themeContext;
    const theme = isLightTheme ? light : dark;   

    return (     
      <div
        onClick={() => getComics(personajeData.id)}
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
            <BackCard
              personajeData={personajeData}
            />
          </div>
        </div>
      </div>
     
    );
  }


export default connect(null, {getComics})(Card);
