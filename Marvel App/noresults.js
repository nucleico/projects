import React from 'react';
import './styles/styles.css';

const noresults = props => {
  return (
    <div className="comicContainer">
      <h2 className="noResultsComics">
        No comic appearances registered in the Marvel database!
      </h2>
      <button onClick={props.erase}>X</button>
    </div>
  );
};

export default noresults;
