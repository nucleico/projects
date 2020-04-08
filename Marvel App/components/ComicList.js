import React, { Component } from 'react';
import Comic from './Comic';
import NoResults from './NoResults';

class ComicList extends Component {
  render() {
    const { comicTitle, comicImg, eraseData } = this.props;

    const comicComponent = comicTitle.map((el, i) => {
      return (
        <Comic
          comicTitle={comicTitle[i]}
          comicImg={comicImg[i]}
          eraseData={eraseData}
          key={i}
        />
      );
    });

    return (
      <div className="comicContainer">
        <h2 id="comicWord">Comic Appeareances</h2>
        <button onClick={eraseData}>X</button>{' '}
        {comicComponent.length > 0 ? (
          comicComponent
        ) : (
          <NoResults eraseData={eraseData} />
        )}
      </div>
    );
  }
}

export default ComicList;
