import React from 'react';
import Fav from "./Fav";
import styles from '../styles/favlist.module.scss';
import { motion } from "framer-motion"
import { connect } from "react-redux"
import { favListToggle } from '../actions/dataActions';

const FavList = ({favsData, favListToggle, isLightTheme, themes}) => {
  
  const theme = isLightTheme ? themes.light : themes.dark;

    const favListComponent = favsData.map((el, i) => {
      return (       
        <Fav      
          favsData={favsData[i]}
          key={favsData[i].id}
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
              onClick={favListToggle}
            >
              X
            </button>
            <h2 style={{ color: theme.letter, fontWeight: theme.weight }} className={styles.favWord}>
              Favourite List
            </h2>
            {favsData.length !== 0 ? favListComponent : <h2 style={{ color: theme.letter, fontWeight: theme.weight }} className={styles.noResultsFavs}>Please add favourite characters!</h2>} {/* Render FavList Component */}
          </motion.div> 
      </div>
    );
  }

  const mapStateToProps = (state) => ({
    favsData: state.data.favsData,
    isLightTheme: state.data.isLightTheme,
themes: state.data.themes
  }
  )

export default connect(mapStateToProps, {favListToggle})(FavList);
