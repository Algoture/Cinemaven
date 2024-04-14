import React, { useState } from "react";
import "../css/Movies.css";
import { Nav } from "../Index";

function MovieDetails() {
  return(
<div className="movieDetails">
    <h1>SHAITAN </h1>
    <h3>2024</h3>
    <p>A timeless tale of battle between good and evil with a family embodying the forces of righteousness while a man symbolizes malevolence.
      <br /> <br />Horror / Thriller
    </p>
    
    
  </div>
  )
  
  
}

function Movies() {
  const [showTrailer, setShowTrailer] = useState(false);

  const handleCardClick = () => {
    setShowTrailer(true);
  };

  return (
    <>
    
      <Nav />
      <MovieDetails />
      <div className="MoviesPage">
        <div className="gradient"></div>

      
        <div className="components">
          <div className="movie-card card-trailer" onClick={handleCardClick}>
            <div className="content-card">
              <img
                src="https://m.media-amazon.com/images/M/MV5BYzc4N2ZkNzgtYTZkYS00Yzk1LWI1M2ItN2Q3MmMwOTlmYmIwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg"
              />
              <span className="shadow"></span>
              <div className="content">
                <h1>Trailer</h1>
                <b>2m</b>
              </div>
            </div>
            {/* Content card end */}

            <div className="watch-card">
              <button>watch now</button>
            </div>
            {/* Watch card end */}
          </div>
          {showTrailer && (
            <div className="trailer-overlay" onClick={() => setShowTrailer(false)}>
              <iframe
                className="iFrame"
                src="https://www.youtube.com/embed/Yxe-mIVIwM4?autoplay=1&mute=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          )}

          <div className="movie-card card-movie">
            <div className="content-card">
              <img src="https://m.media-amazon.com/images/M/MV5BMzQwYmYyOWQtNTkyOS00ZjJiLWExMGEtYjdmNTIxNjliNDBiXkEyXkFqcGdeQXVyODgzMzg2MDg@._V1_.jpg" />
              <span className="shadow"></span>
              <div className="content">
                <h1>MOVIE</h1>
                <b>2h 12m</b>
              </div>
            </div>
            {/* Content card end */}

            <div className="watch-card">
              <button>watch now</button>
            </div>
            {/* Watch card end */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Movies;
