import React, { useState } from "react";
import { Nav } from "../Index";
import { useLocation } from "react-router-dom";
import "../css/Movies.css";

function MovieDetails({ title, year, description }) {
  return (
    <div className="movieDetails">
      <h1>{title}</h1>
      <h3>{year}</h3>
      <p>{description}</p>
    </div>
  );
}

function TrailerPage() {
  const [showTrailer, setShowTrailer] = useState(false);
  const [showMovie, setShowMovie] = useState(false);
  const location = useLocation();
  const { movie } = location.state || {};

  const handleCardClick = () => {
    setShowTrailer(true);
  };
  const handleMovieCardClick = () => {
    setShowMovie(true);
  };
  return (
    <>
      <Nav />
      <MovieDetails
        title={movie.title}
        year={movie.year}
        description={movie.description}
      />
      <div className="MoviesPage">
        <div
          className="gradient"
          style={{ "--poster-url": `url(${movie.bgimage})` }}
        ></div>
        <div className="components">
          <div className="movie-card card-trailer" onClick={handleCardClick}>
            <div className="content-card">
              <img src={movie.image} alt={movie.title} />
              <span className="shadow"></span>
              <div className="content">
                <h1>Trailer</h1>
                <b>{movie.trailerLength}</b>
              </div>
            </div>
            <div className="watch-card">
              <button>watch now</button>
            </div>
          </div>

          <div className="movie-card card-movie" onClick={handleMovieCardClick}>
            <div className="content-card">
              <img src={movie.image} alt={movie.title} />
              <span className="shadow"></span>
              <div className="content">
                <h1>MOVIE</h1>
                <b>{movie.movielength}</b>
              </div>
            </div>
            <div className="watch-card">
              <button>watch now</button>
            </div>
          </div>

          {showTrailer && (
            <div
              className="trailer-overlay"
              onClick={() => setShowTrailer(false)}
            >
              <iframe
                className="iFrame"
                src={`https://www.youtube.com/embed/${movie.trailer}?autoplay=1&mute=1`}
                title="YouTube video player"
                // allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
              ></iframe>
            </div>
          )}
          {showMovie && (
            <div
              className="trailer-overlay"
              onClick={() => setShowMovie(false)}
            >
              <iframe
                className="iFrame2"
                title="Movie player"
                // src={`https://www.2embed.cc/embed/${movie.moviecode}`}
                // allowfullscreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TrailerPage;
