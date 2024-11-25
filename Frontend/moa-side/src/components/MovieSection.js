import React from 'react'

export const MovieSection = ({ movies }) => {
  return (
    
    <div className="container-xl pb-3 pt-3 mt-3 border bg-light" style={{ borderRadius: 8, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 className="text-center" style={{ paddingBottom: 20 }}>Now on Theatres</h2>
        <div className="row" id="movie-list">
          {movies.map((movie) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4" key={movie.title}>
              <div className="card h-100">
                <img src={movie.image} className="card-img-top img-fluid" alt={movie.title} />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="rating">{movie.rating}</p>
                  <p className="card-text">{movie.description}</p>
                  <button 
                    className="btn btn-primary" 
                    data-bs-toggle="modal" 
                    data-bs-target="#bookingModal" 
                  >
                    Book Ticket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}



export default MovieSection;
