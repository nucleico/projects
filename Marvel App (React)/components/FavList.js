import React, { Component } from 'react';

class FavList extends Component {
  render() {
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
              <td className="comicTable">{this.props.favCharacters} </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default FavList;
