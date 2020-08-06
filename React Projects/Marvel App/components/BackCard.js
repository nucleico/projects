import React, { useState } from 'react';
import styles from '../styles/backcard.module.scss';
import { connect } from "react-redux"
import {removeFavList, addFavList} from "../actions/dataActions"

const BackCard = ({personajeData, removeFavList, addFavList }) => {

  const [powerPoints] = useState(Math.ceil(Math.random() * 98))
  const [speedPoints] = useState(Math.ceil(Math.random() * 98))
  const [resPoints] = useState(Math.ceil(Math.random() * 98))
  const [fav, setFav] = useState(false)

  const img = `${personajeData.thumbnail.path}.${personajeData.thumbnail.extension}`
  const { name, id } = personajeData 

  const makeFav = (e) => {
    e.stopPropagation();
    setFav(!fav)
    if (!fav) {
      addFavList(name, img, id);
    } else {
      removeFavList(name, img, id);
    }
  };
  
    return (
      <div className={styles.statsContainer}>
        
          <i className={`${styles.favIcon} ${fav ? `fas fa-heart` : `far fa-heart`}`}
          onClick={makeFav}/>              
      
        <h2 className={styles.nameBackCard}>{name}</h2>

        <div className={styles.statsAtt}>
          <h2>
            Strength:{' '}
            <div className={styles.attrBar}>
              <div
                className={styles.pointsBar}
                style={{ width: powerPoints }}
              ></div>
            </div>
          </h2>

          <h2>
            Speed:{' '}
            <div className={styles.attrBar}>
              <div
                className={styles.pointsBar}
                style={{ width: speedPoints }}
              ></div>
            </div>
          </h2>

          <h2>
            Resistance:{' '}
            <div className={styles.attrBar}>
              <div
                className={styles.pointsBar}
                style={{ width: resPoints }}
              ></div>
            </div>
          </h2>
        </div>
        
      </div>
    );
  }


export default connect(null, { addFavList, removeFavList })(BackCard);
