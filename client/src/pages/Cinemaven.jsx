import { firebaseAuth, MainCarousel, Nav } from "../Index";
import { NavLink, useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { signOut } from "firebase/auth";
import axios from "axios";
import "../css/Cinemaven.scss";
import React, { useState, useEffect } from "react";

const Cinemaven = React.memo(() => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get("https://cinemavenserver.onrender.com/api/movies").then((res) => {
      setMovies(res.data.myData);
    });
  }, []);
  const navigate = useNavigate();
  const handleClick = () => {
    signOut(firebaseAuth);
    navigate("/");
  };
  const handleButtonClick = (movie) => {
    navigate("/movies", { state: { movie } });
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Nav />
      <div className="cinemaven">
        <button onClick={handleClick} className="homelogoutbutton">
          LogOut
        </button>
        <div className="bg-img">
          <Carousel
            responsive={responsive}
            showDots={false}
            autoPlay={true}
            partialVisible={false}
            containerClass="movie"
            pauseOnHover={false}
            autoPlaySpeed={5000}
            customTransition="all 1s"
            infinite={true}
            transitionDuration={500}
            removeArrowOnDeviceType={["mobile", "desktop"]}
          >
            {movies.map((movie, index) => (
              <img
                key={index}
                src={movie.image}
                alt=""
                className="carousel-bgimg"
                loading="lazy"
              />
            ))}
          </Carousel>
        </div>
        <div className="main">
          <div className="trending-movie">
            <div className="content">
              <div className="options">
                <NavLink to="/all" className="navlinks">
                  All
                </NavLink>
                <NavLink to="/tvshows" className="navlinks">
                  TV Shows
                </NavLink>
                <NavLink to="/more" className="navlinks">
                  More
                </NavLink>
              </div>

              <div className="movie">
                <Carousel
                  responsive={responsive}
                  showDots={false}
                  autoPlay={true}
                  partialVisible={false}
                  containerClass="movie"
                  pauseOnHover={false}
                  autoPlaySpeed={5000}
                  customTransition="all 1s"
                  infinite={true}
                  transitionDuration={500}
                  removeArrowOnDeviceType={["mobile", "desktop"]}
                >
                  {movies.map((movie, index) => (
                    console.log(movie.title),
                    <div key={index} className="movie-content">
                      <h1 className="movie-name">{movie.title}</h1>
                      <p>{movie.description}</p>
                      <p className="year">{movie.year}</p>
                      <div className="trailer-button">
                        <button onClick={() => handleButtonClick(movie)}>
                          Watch
                        </button>
                        <button className="add-list">Add To List</button>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <MainCarousel start={0} end={10} heading={""} kilas="kilas" />
      </div>
      <MainCarousel start={10} end={20} heading={"Latest Releases"} />
      <MainCarousel start={20} end={30} heading={"Trending"} />
      <MainCarousel start={30} end={40} heading={"Top Rated On IMDB"} />
    </>
  );
});

export default Cinemaven;
