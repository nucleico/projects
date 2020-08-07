import React from 'react'
import styles from '../styles/fav.module.scss';
import {connect} from "react-redux"


const Fav = ({favsData, themes, isLightTheme}) => {
  
  
        const theme = isLightTheme ? themes.light : themes.dark;
                return (
         <div className={styles.comicListContainer}> 
          <table>
          <tbody>
            <tr>
              <td className={styles.imgTable}>
                <img
                  src={favsData.im}
                  className={styles.imagenComic}
                  alt="imagen character"
                ></img>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td               
               style={{ color: theme.letter, fontWeight: theme.weight }} 
               className={styles.comicTable}
               >
                {favsData.ch}
              </td>
            </tr>
          </tbody>
        </table>
         </div>
        )
    }

    const mapStateToProps = (state) => ({
      favsData: state.data.favsData,
      isLightTheme: state.data.isLightTheme,
  themes: state.data.themes
    }
    )


export default connect(mapStateToProps)(Fav)
