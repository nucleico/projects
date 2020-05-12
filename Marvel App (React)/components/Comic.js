import React, { Component } from 'react';
import '../styles/styles.css';
import { ThemeContext } from '../context/ThemeContext';

class Comic extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    const { comicTitle, comicImg } = this.props;
    return (
      <div className="comicListContainer">
        <table>
          <tbody>
            <tr>
              <td className="imgTable">
                <img
                  src={comicImg}
                  className="imagenComic"
                  alt="imagen comic"
                ></img>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td style={{ color: theme.letter }} className="comicTable">
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
