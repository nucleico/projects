import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class FavList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div className="comicListContainer" draggable="true">
        <table>
          <tbody>
            <tr>
              <td className="imgTable">
                <img
                  src={this.props.favCharacterImg}
                  className="imagenComic"
                  alt="imagen character"
                ></img>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <td style={{ color: theme.letter, fontWeight: theme.weight }} className="comicTable">
                {this.props.favCharacters}{' '}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default FavList;
