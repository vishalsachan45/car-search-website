import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ carsPerPage, totalCars, currentPage,setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCars / carsPerPage); i++) {
    pageNumbers.push(i);
  }

  const nextPage = currentPage < Math.ceil(totalCars / carsPerPage) ? currentPage + 1 : currentPage;

  return (
    <nav>
      <ul className="pagination">
        <li>
          <button
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number}>
            <Link to={`/page/${number}`}>
              <button className={currentPage === number ? 'active' : ''}>
                {number}
              </button>
            </Link>
          </li>
        ))}
        <li>
          <Link to={`/page/${nextPage}`}>
            <button
              onClick={() =>
                currentPage < Math.ceil(totalCars / carsPerPage) &&
                setCurrentPage(currentPage + 1)
              }
              disabled={currentPage === Math.ceil(totalCars / carsPerPage)}
            >
              Next
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
