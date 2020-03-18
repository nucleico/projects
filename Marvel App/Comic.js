import React from 'react';
import './styles/styles.css';

const Comic = props => {
  const { title, comicImg, erase } = props;
  const comicTitles = title.map((el, i) => {
    return (
      <tr className="comicTable" key={i}>
        <td className="tituloComic">{el}</td>
      </tr>
    );
  });

  const comicImages = comicImg.map((el, i) => {
    return (
      <tr key={i} className="imgTable">
        <td>
          <img src={el} className="imagenComic" alt="imagen comic"></img>
        </td>
      </tr>
    );
  });

  return (
    <div className="comicContainer">
      <h2 id="comicWord">Comic Appeareances</h2>
      <button onClick={erase}>X</button>
      <table>
        <tbody>{comicImages}</tbody>
      </table>{' '}
      <table>
        <tbody>{comicTitles}</tbody>
      </table>
    </div>
  );
};

export default Comic;
