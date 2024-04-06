import React from 'react';
import './Pagination.css';

const Pagination = ({ pages, currentPage, onPageChange }) => {
  return (
    <div className="pagination-container">
      <button onClick={() => onPageChange(1)} disabled={currentPage === 1}>
        {'<<'}
      </button>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        {'<'}
      </button>
      {Array.from({ length: pages }, (_, i) => i + 1).map(page => (
        <button
          key={page}
          className={page === currentPage ? 'active' : ''}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === pages}>
        {'>'}
      </button>
      <button onClick={() => onPageChange(pages)} disabled={currentPage === pages}>
        {'>>'}
      </button>
    </div>
  );
};

export default Pagination;
