import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext';

class Pagination extends Component {
    static contextType = ThemeContext;
    
    render() {
        const { postsPerPage, totalPosts, paginate } = this.props;
        const { isLightTheme, light, dark } = this.context;
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
                  <div onClick={() => paginate(number)}  >
                    {number}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        )
    }
}

export default Pagination
