import React, { Component } from 'react';
import Comic from './Comic';
import ContextProvider from './contexts/context';
import { Context } from './contexts/context';
import NoResults from './noresults';

class ComicList extends Component {
  static contextType = Context;
  render() {
    const { title, comicImg, toggle, erase } = this.props;

    const comicComponent = this.props.title.map((user, i) => {
      return (
        <ContextProvider key={i}>
          <Comic
            title={title}
            comicImg={comicImg}
            toggle={toggle}
            erase={erase}
          />
        </ContextProvider>
      );
    });

    return (
      <div>
        <div>
          {' '}
          {comicComponent.length > 0 ? (
            comicComponent
          ) : (
            <NoResults erase={erase} />
          )}
        </div>
      </div>
    );
  }
}

export default ComicList;
