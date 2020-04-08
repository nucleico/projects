import React from 'react';
import '../styles/styles.css';

const NoResults = (props) => {
  return (
    <div className="comicContainer">
      <h2 className="noResultsComics">
        No comic appearances registered in the Marvel database!
      </h2>
      <button onClick={props.eraseData}>X</button>
    </div>
  );
};

export default NoResults;
