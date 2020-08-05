import React, { Component } from 'react'
import styles from '../styles/fav.module.scss';
import { ThemeContext } from '../context/ThemeContext';


export default class Fav extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
         <div className={styles.comicListContainer}> 
          <table>
          <tbody>
            <tr>
              <td className={styles.imgTable}>
                <img
                  src={this.props.favCharacterImg}
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
                {this.props.favCharacters}
              </td>
            </tr>
          </tbody>
        </table>
         </div>
        )
    }
}
