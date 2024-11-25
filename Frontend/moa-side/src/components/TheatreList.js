// src/components/TheatreList.js
import React, { useState } from 'react';

const TheatreList = ({ theaters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const theatersPerPage = 5;

  const indexOfLastTheater = currentPage * theatersPerPage;
  const indexOfFirstTheater = indexOfLastTheater - theatersPerPage;
  const currentTheaters = theaters.slice(indexOfFirstTheater, indexOfLastTheater);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="theatre-list mb-5" style={{marginLeft: "300px"}}>
      <h3>Theatres</h3>
      <ul className="list-group">
        {currentTheaters.map(theater => (
          <li key={theater.id} className="list-group-item">
            {theater.name} - {theater.location}
          </li>
        ))}
      </ul>
      <nav aria-label="Theatre pagination">
        <ul className="pagination">
          {[...Array(Math.ceil(theaters.length / theatersPerPage))].map((_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button onClick={() => paginate(index + 1)} className="page-link">
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TheatreList;
