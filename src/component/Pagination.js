import React from 'react';

const Pagination = ({postsPerPage , totalPost,paginate }) => {
    let pageNumber = [] ;

    for( let i=1 ; i <= Math.ceil(totalPost/postsPerPage) ; i++  ){
     pageNumber.push(i)
    }

    return (
        <nav>

            <ul>
                {pageNumber.map(number => <li key={number} >
                    <a onClick={()=>paginate(number)} href='!#' > {number} </a>
                </li> )}
            </ul>
            
        </nav>
    );
};

export default Pagination;