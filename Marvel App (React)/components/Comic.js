import React from 'react';
import '../styles/styles.css';

const Comic = (props) => {
  const { comicTitle, comicImg } = props;
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
            <td className="comicTable">*{comicTitle}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Comic;
