// src/HomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SidebarMenu from './components/SidebarMenu';
import MovieCarousel from './components/MovieCarousel';
import UpcomingMovies from './components/UpcomingMovies';
import CarouselAd from './components/AdSecttion';
import TheatreList from './components/TheatreList';
import NewsSection from './components/NewsSection';
import Horizon from './components/Horizon';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [upcomings, setUpcomings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeComponent, setActiveComponent] = useState("nowPlaying");

  useEffect(() => {
    
const fetchMovies = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/movies');
    setMovies(response.data);
    setLoading(false);
  } catch (err) {
    setError('Error fetching movies');
    setLoading(false);
    console.error('Error:', err);
  }
};

const fetchUpcomings = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/upcoming');
    setUpcomings(response.data);
    setLoading(false);
  } catch (err) {
    setError('Error fetching movies');
    setLoading(false);
    console.error('Error:', err);
  }
};

    fetchMovies();
    fetchUpcomings();
  }, []);

  const NowPlaying = () => (

    <div className="container-xl pb-3 pt-3 mt-3 bg1" style={{ borderRadius: 8, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
    <h2 className="text-center" style={{ paddingBottom: 20 }}>Now on Theatres</h2>
    <div className="row" id="movie-list">
      {movies.map((movie) => (
        <div className="col-12 col-sm-6 col-md-4 mb-4" key={movie.title}>
          <div className="card h-100">
            <a href='#'>
            <img src={movie.image} className="card-img-top img-fluid img-set h-100" alt={movie.title} />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>

  )

  const UpComing = () => (
    
    <div className="container-xl pb-3 pt-3 mt-3 bg1" style={{ borderRadius: 8, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
    <h2 className="text-center" style={{ paddingBottom: 20 }}>Upcoming Movies</h2>
    <div className="row" id="movie-list">
      {upcomings.map((upcoming) => (
        <div className="col-12 col-sm-6 col-md-4 mb-4" key={upcoming.title}>
          <div className="card h-100">
            <a href='#'>
            <img src={upcoming.image} className="card-img-top img-fluid img-set h-100" alt={upcoming.title} />
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>

  )

  return (
    <div className="container-fluid" style={{backgroundColor: "#151515"}}>
      <div className="d-flex">
        <SidebarMenu />
         
         <div className='main'>
          <Horizon />
         <CarouselAd />
          <div className='d-flex lefty'>
            <div>
            <button className="btn btn-red" onClick={() => setActiveComponent("nowPlaying")}>
              Now Playing
            </button>
            </div>
            <div>
            <button className="btn btn-red" onClick={() => setActiveComponent("upComing")}>
              Upcoming
            </button>
            </div>
          </div>
          <div>
            {activeComponent === "nowPlaying" && <NowPlaying />}
            {activeComponent === "upComing" && <UpComing />}
          </div>
        </div>
        </div>
      </div>
  );
};

export default HomePage;
