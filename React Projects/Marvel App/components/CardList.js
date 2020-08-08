import React from 'react';
import styles from '../styles/cardlist.module.scss';
import Card from './Card';
import { connect } from "react-redux"

const CardList = ( {personajeData, isLightTheme, themes} ) => {

    const theme = isLightTheme ? themes.light : themes.dark;    

    const cardComponent = personajeData.map((u, i) => {
      return (
        <Card
          personajeData={personajeData[i]}        
          key={personajeData[i].id}         
                   
        />
      );
    });

    return (
      <div>
        <div className={styles.grid}>{cardComponent} </div>
        <h4 style={{ color: theme.letter, fontWeight: theme.weight }}>
          Data provided by Marvel. © 2014 Marvel.
        </h4>
      </div>
    );
  }

  const mapStateToProps = state => ({
    personajeData: state.data.personajeData,      
          isLightTheme: state.data.isLightTheme,
      themes: state.data.themes,
   
  })


export default connect(mapStateToProps)(CardList);
