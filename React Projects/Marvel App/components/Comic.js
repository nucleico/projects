import React from 'react';
import styles from '../styles/comic.module.scss';
import '../styles/styles.css';
import { connect } from "react-redux"

const Comic = ({currentComic, isLightTheme, themes}) => {

    const theme = isLightTheme ? themes.light : themes.dark;      

    return (  
       <div className={styles.comicListContainer}>                
        <table>
          <tbody>
            <tr>
              <td className={styles.imgTable}>
                <img
                  src={`${currentComic.thumbnail.path}.${currentComic.thumbnail.extension}`}
                  className={styles.imagenComic}
                  alt="imagen comic"
                ></img>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td style={{ color: theme.letter, fontWeight: theme.weight }} className={styles.comicTable}>
                *{currentComic.title}
              </td>
            </tr>
          </tbody>
         </table> 
        
      </div>
       
    );
  }

  const mapStateToProps = state => ({
    isLightTheme: state.data.isLightTheme,
    themes: state.data.themes,
})

export default connect(mapStateToProps)(Comic);
