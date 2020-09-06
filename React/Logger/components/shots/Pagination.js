import React from 'react'

const Pagination = ({shotsPerPage, totalShots, setCurrentPage, currentPage}) => {       
              
        const pageNumbers = [];

        for (let i = 1; i <= Math.ceil(totalShots / shotsPerPage); i++) {
            pageNumbers.push(i);
          }          

        return (         
            <ul className="paginationUl">
              {pageNumbers.map(number => (                  
                <li onClick={() => setCurrentPage(number)} className= {`li-items ${currentPage === number && "active" }`} style={{margin: "5px", width: "12px", textAlign: "center"}} 
                key={number}>                                   
                    {number}             
                </li>               
              ))} 
            </ul>                    
        )  }

export default Pagination;
