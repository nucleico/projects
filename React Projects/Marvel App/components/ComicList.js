import React, { useState } from 'react';
import Comic from './Comic';
import styles from '../styles/comiclist.module.scss';
import Pagination from './Pagination';
import { motion } from 'framer-motion';
import { connect } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import { cleanComicData } from "../actions/dataActions"

const ComicList = ({  
  comicData,
  themes,
  isLightTheme,
  comicListToggle,
  cleanComicData
}) => {
  const theme = isLightTheme ? themes.light : themes.dark;

  const [postsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentComic = comicData.slice(indexOfFirstPost, indexOfLastPost);
  
  const comicComponent = currentComic.map((el, i) => {
    return <Comic currentComic={currentComic[i]} key={comicData[i].id} />;
  });
      
   return (
     <AnimatePresence>
    {comicListToggle && 
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
      style={{ backgroundColor: theme.comicBack }}
      className={styles.comicContainer}
    >
      <h2
        style={{ color: theme.letter, fontWeight: theme.weight }}
        className={styles.comicWord}
      >
        Comic Appeareances
      </h2>
      <button
        style={{ color: theme.letter }}
        className={styles.xBtn}
        onClick={cleanComicData}
      >
        X
      </button>{' '}
      {comicComponent.length > 0 ? (
        <div>
          {comicComponent}
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={comicData.length}
            setCurrentPage={setCurrentPage}
          />
        </div>
      ) : (
        <h2
          style={{ color: theme.letter, fontWeight: theme.weight }}
          className={styles.noResultsComics}
        >
          No comic appearances registered in the Marvel database!
        </h2>
      )}
    </motion.div>
  } 
    </AnimatePresence>
  );
   
}


const mapStateToProps = (state) => ({
  comicData: state.data.comicData,
  isLightTheme: state.data.isLightTheme,
  themes: state.data.themes,
  comicListToggle: state.data.comicListToggle,
  cleanComicData: state.data.cleanComicData
});

export default connect(mapStateToProps, { cleanComicData })(ComicList);
