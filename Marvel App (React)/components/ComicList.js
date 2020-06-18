import React, { Component } from 'react';
import Comic from './Comic';
import NoResults from './NoResults';
import Pagination from "./Pagination"
import { ThemeContext } from '../context/ThemeContext';
import { motion } from "framer-motion"

class ComicList extends Component {
  static contextType = ThemeContext;
  
  state = {      
    postsPerPage: 10,
    currentPage: 1,
    }  

  setCurrentPage = (number) => {
    this.setState({
      currentPage: number
    })
  }

  render() {
      
    const { comicTitle, comicImg, eraseData} = this.props;
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;      
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;    
    const currentComicTitle = comicTitle.slice(indexOfFirstPost, indexOfLastPost);  
    const currentComicImg = comicImg.slice(indexOfFirstPost, indexOfLastPost);   

    const comicComponent = currentComicTitle.map((el, i) => {
      return (
        <Comic
          comicTitle={currentComicTitle[i]}
          comicImg={currentComicImg[i]}
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
        <h2 style={{ color: theme.letter, fontWeight: theme.weight }} id="comicWord">
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
          <div>
            {comicComponent}
            <Pagination 
              postsPerPage={this.state.postsPerPage} 
              totalPosts={comicTitle.length} 
              paginate={this.setCurrentPage} />
          </div>
            
        ) : (
          <NoResults eraseData={eraseData} />
        )}
      </motion.div>
     
    );
  }
}

export default ComicList;
