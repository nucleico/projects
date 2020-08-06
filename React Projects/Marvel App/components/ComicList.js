import React, { useState, useContext } from 'react';
import Comic from './Comic';
import styles from '../styles/comiclist.module.scss';
import Pagination from "./Pagination"
import { ThemeContext } from '../context/ThemeContext';
import { motion } from "framer-motion"
import { connect } from "react-redux"
import { cleanComicData } from "../actions/dataActions"

const ComicList = ({cleanComicData, comicData}) => {

  const [postsPerPage] = useState(10)
  const [currentPage] = useState(1) 
  
  const themeContext = useContext(ThemeContext)
  const { isLightTheme, light, dark } = themeContext;
  const theme = isLightTheme ? light : dark; 
  
  const setCurrentPage = (number) => {
    this.setState({
      currentPage: number
    })
  }        
    
    const indexOfLastPost = currentPage * postsPerPage;      
    const indexOfFirstPost = indexOfLastPost - postsPerPage;    

    // const currentComicTitle = comicData.title.slice(indexOfFirstPost, indexOfLastPost);  
    // const currentComicImg = comicData.img.slice(indexOfFirstPost, indexOfLastPost);   

    const comicComponent = comicData.map((el, i) => {
      return (
        <Comic
          comicData={comicData[i]} 
          // comicTitle={currentComicTitle[i]}
          // comicImg={currentComicImg[i]}                 
          key={comicData[i].id}  
        />     
         
      );
    });

    return (
     
    <motion.div initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{ duration: 0.5 }}
      exit={{opacity: 0}}
        style={{ backgroundColor: theme.comicBack }}
        className={styles.comicContainer}
      >
        <h2 style={{ color: theme.letter, fontWeight: theme.weight }} className={styles.comicWord}>
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
              // totalPosts={comicTitle.length} 
              paginate={setCurrentPage} />
          </div>
            
        ) : (
          <h2 style={{ color: theme.letter, fontWeight: theme.weight }} className={styles.noResultsComics}>
          No comic appearances registered in the Marvel database!
        </h2>
        )}
      </motion.div>     
     
    );
  }

  const mapStateToProps = state => ({
    comicData: state.data.comicData      
  })


export default connect(mapStateToProps, {cleanComicData})(ComicList);


