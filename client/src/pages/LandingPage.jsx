import { useState, useEffect } from "react";
import { NavLink, CarouselM, Nav } from "../Index";
import "../css/LandingPage.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { API_url_Trending, options } from "../utils/Constants";
const LandingPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await fetch(API_url_Trending, options);
        // const data = await res.json();
        // console.log(data);
        // setMovies(data.trailers);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <>
      <Nav />
      <div className="landing">
        <div className="bg-img">
          {loading ? (
            <div className="loading">
              <div className="loader"></div>
            </div>
          ) : (
            <Carousel
              responsive={responsive}
              showDots={false}
              autoPlay={true}
              partialVisible={false}
              containerClass="carousel-container"
              autoPlaySpeed={5000}
              customTransition="all 1s"
              pauseOnHover={false}
              infinite={true}
              transitionDuration={500}
              removeArrowOnDeviceType={["mobile", "desktop"]}
            >
              {movies.slice(0, 5).map((phutu, index) => (
                <img key={index} src={phutu.image} alt="" />
              ))}
            </Carousel>
          )}
        </div>
        <div className="main">
          <div className="trending-movie">
            <div className="gradient"></div>

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
                {loading ? (
                  <div className="loading">
                    <div className="loader"></div>
                  </div>
                ) : (
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
                    {movies.slice(0, 5).map((name, index) => (
                      <>
                        <h1 key={index}>{name.title}</h1>
                        <p key={index}>{name.releaseDate}</p>
                      </>
                    ))}
                  </Carousel>
                )}
              </div>

              <div className="watch">
                <button className="watch-now">Watch</button>

                <div className="trailer-button">
                  <button className="trailer">Trailer</button>
                  <button className="add-list">Add List</button>
                </div>
              </div>
            </div>
          </div>

          <div className="login">
            <NavLink to="/login">
              <button className="login-btn">Log In</button>
            </NavLink>
          </div>
        </div>
      </div>
      <CarouselM />
    </>
  );
};

export default LandingPage;
