import React from 'react';
import ad1 from './assets/gopay.jpg';
import ad2 from './assets/jajan.jpg';
import ad3 from './assets/cocacola.jpg';
import './script/Carousel.css';


function Banner() {
  return (
    <div>
    {/* Caraousel/Banner */}
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          
            <img src={ad1} className="d-block w-100 wrapr" alt="..." />
         
        </div>
        <div className="carousel-item">
          
            <img src={ad2} className="d-block w-100 wrapr" alt="coke" />
          
        </div>
        <div className="carousel-item">
          
            <img src={ad3} className="d-block w-100 wrapr" alt="..." />
          
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div></div>
  )
}

export default Banner