import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

const Pagination = ({postsPerPage, totalPosts, setCurrentPage}) => {
  const themeContext = useContext(ThemeContext)    
    
        const { isLightTheme, light, dark } = themeContext;
        const theme = isLightTheme ? light : dark;        

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


export default Pagination
