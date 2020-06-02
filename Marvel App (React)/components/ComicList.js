import React, { Component } from 'react';
import Comic from './Comic';
import NoResults from './NoResults';
import { ThemeContext } from '../context/ThemeContext';
import { motion, AnimatePresence } from "framer-motion"

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
      
      <motion.div initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{ duration: 0.5 }}
      exit={{opacity: 0}}
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
      </motion.div>     
    );
  }
}

export default ComicList;
