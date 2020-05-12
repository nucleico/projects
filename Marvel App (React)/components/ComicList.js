import React, { Component } from 'react';
import Comic from './Comic';
import NoResults from './NoResults';
import { ThemeContext } from '../context/ThemeContext';

class ComicList extends Component {
  static contextType = ThemeContext;
  render() {
    const { comicTitle, comicImg, eraseData } = this.props;
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

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
      <div
        style={{ backgroundColor: theme.comicBack }}
        className="comicContainer"
      >
        <h2 style={{ color: theme.letter }} id="comicWord">
          Comic Appeareances
        </h2>
        <button
          style={{ color: theme.letter }}
          className="xBtn"
          onClick={eraseData}
        >
          X
        </button>{' '}
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
