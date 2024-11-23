import React from 'react';
import Slider from 'react-slick';
import image1 from './assets/fnaf.jpg';
import image2 from './assets/fnaf2.jpg';
import image3 from './assets/if.jpg';
import image4 from './assets/ironclaw.jpg';
import image5 from './assets/mario.jpg';
import image6 from './assets/minion.jpg';
import image7 from './assets/sonic2.jpg';
import './script/Carousel.css';


const CarouselComponent = () => {
  const movies = [
    {
      id: 1,
      title: 'Movie Title 1',
      description: 'Description of Movie 1',
      imageUrl: image1,
    },
    {
      id: 2,
      title: 'Movie Title 2',
      description: 'Description of Movie 2',
      imageUrl: image2,
    },
    {
      id: 3,
      title: 'Movie Title 3',
      description: 'Description of Movie 3',
      imageUrl: image3,
    },
    {
      id: 4,
      title: 'Movie Title 3',
      description: 'Description of Movie 3',
      imageUrl: image4,
    },
    {
      id: 5,
      title: 'Movie Title 3',
      description: 'Description of Movie 3',
      imageUrl: image5,
    },
    {
      id: 6,
      title: 'Movie Title 3',
      description: 'Description of Movie 3',
      imageUrl: image6,
    },
    {
      id: 7,
      title: 'Movie Title 3',
      description: 'Description of Movie 3',
      imageUrl: image7,
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '20px',
    
    
  };

  return (
    <div style={{marginLeft: '300px', marginBottom: '50px'}}>
      <div className='d-flex gap-5 justify-conttent-between w-100' style={{marginLeft: "200px", paddingTop: "20px"}}>
        <div style={{marginLeft: "-100px"}}>
        <h3>Now In Cinemas</h3>
        </div>
        <div className='align-self-center flex-grow-1' style={{marginRight: "-350px"}}>
        <a href='Movies' className='text-decoration-none link-secondary'><h5>See More</h5></a>
        </div>
      
      </div>
    
    <Slider {...settings}>
      {movies.map((movie) => (
        <div key={movie.id}>
          <div className="card" style={{ width: '18rem', margin: 'auto' }}>
            <img src={movie.imageUrl} className="card-img-top" style={{ width: '18rem', height: '450px' }} alt={movie.title} />
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">{movie.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  
    </div>
  );
};

export default CarouselComponent;
