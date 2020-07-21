import React, { Component } from 'react';
import Fav from "./Fav";
import { ThemeContext } from '../context/ThemeContext';
import styles from '../styles/favlist.module.scss';
import { motion } from "framer-motion"

class FavList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    const favListComponent = this.props.favCharacters.map((el, i) => {
      return (       
        <Fav          
          favCharacters={this.props.favCharacters[i]}
          favCharacterImg={this.props.favCharacterImg[i]}          
        /> 
      );
    });

    return (
      <div>
         <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ duration: 0.5 }}
            exit={{opacity: 0}}
            style={{ backgroundColor: theme.comicBack }}
            className={styles.favContainer}
          >
            <button
              style={{ color: theme.letter }}
              className={styles.xBtn}
              onClick={this.props.favListToggleFn}
            >
              X
            </button>
            <h2 style={{ color: theme.letter, fontWeight: theme.weight }} className={styles.favWord}>
              Favourite List
            </h2>
            {favListComponent} {/* Render FavList Component */}
          </motion.div> 
      </div>
    );
  }
}

export default FavList;
