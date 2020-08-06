import React, { useContext } from 'react'
import styles from '../styles/fav.module.scss';
import { ThemeContext } from '../context/ThemeContext';

const Fav = ({favsData}) => {
  
  const themeContext = useContext(ThemeContext)    
        
        const { isLightTheme, light, dark } = themeContext
        const theme = isLightTheme ? light : dark;
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


export default Fav
