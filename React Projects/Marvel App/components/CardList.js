import React, { useContext } from 'react';
import styles from '../styles/cardlist.module.scss';
import { ThemeContext } from '../context/ThemeContext';
import Card from './Card';
import { connect } from "react-redux"

const CardList = ( {personajeData} ) => {

    const themeContext = useContext(ThemeContext)   
    const { isLightTheme, light, dark } = themeContext;
    const theme = isLightTheme ? light : dark;
    

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
    personajeData: state.data.personajeData      
  })


export default connect(mapStateToProps)(CardList);
