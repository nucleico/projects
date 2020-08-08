import React from 'react'
import { connect } from "react-redux"

const Pagination = ({postsPerPage, totalPosts, setCurrentPage, isLightTheme, themes}) => {
 
  
  const theme = isLightTheme ? themes.light : themes.dark;       
              

        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            pageNumbers.push(i);
          }

        return (
            <nav>
            <ul className="pagination">
              {pageNumbers.map(number => (
                <li style={{ color: theme.letter, fontWeight: theme.weight }} className="page-items" key={number}>
                  <div onClick={() => setCurrentPage(number)}  >
                    {number}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        )
    }


const mapStateToProps = state => ({
  isLightTheme: state.data.isLightTheme,
  themes: state.data.themes,
})

export default connect(mapStateToProps)(Pagination);
