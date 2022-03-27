import React from 'react'

const Pagination = ({itemsPerPage,totalItems,paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++){
        pageNumbers.push(i)
    }
  return (
    <nav>
        <ul className='pagination'>
            {pageNumbers.map(Number => (
                <li key={Number} className="page-item">
                    <a onClick={() => paginate(Number)}href="!#" className="page-link">{Number}</a>   
                </li>
            ))}
        </ul>
    </nav>
  );
}

export default Pagination