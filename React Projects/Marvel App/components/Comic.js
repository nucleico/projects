import React, { useContext } from 'react';
import styles from '../styles/comic.module.scss';
import '../styles/styles.css';
import { ThemeContext } from '../context/ThemeContext';

const Comic = ({comicData}) => {

    const themeContext = useContext(ThemeContext)  
    const { isLightTheme, light, dark } = themeContext;
    const theme = isLightTheme ? light : dark;
    const comicImg = `${comicData.thumbnail.path}.${comicData.thumbnail.extension}`
    return (     
      
      <div className={styles.comicListContainer}>                
        <table>
          <tbody>
            <tr>
              <td className={styles.imgTable}>
                <img
                  src={comicImg}
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
                *{comicData.title}
              </td>
            </tr>
          </tbody>
         </table> 
        
      </div>
       
    );
  }


export default Comic;
