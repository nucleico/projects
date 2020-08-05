import React, { Component } from 'react';
import styles from '../styles/comic.module.scss';
import '../styles/styles.css';
import { ThemeContext } from '../context/ThemeContext';

class Comic extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    const { comicTitle, comicImg } = this.props;
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
                *{comicTitle}
              </td>
            </tr>
          </tbody>
         </table> 
        
      </div>
    );
  }
}

export default Comic;
