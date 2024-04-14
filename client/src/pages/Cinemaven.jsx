import { firebaseAuth, MainCarousel, Nav } from "../Index";
import { signOut } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Carousel from "react-multi-carousel";
import "../css/Cinemaven.scss";
import "react-multi-carousel/lib/styles.css";
import "../css/Pages.scss";
import React,{ useState } from "react";
const Cinemaven = React.memo(() => {
  const navigate = useNavigate();
  const handleClick = () => {
    signOut(firebaseAuth);
    navigate("/");
  };

  const [moviesComponent, setMoviesComponent] = useState(null);

  const handleButtonClick =  () => {
    navigate("/Movies");
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
            autoPlaySpeed={7000}
            customTransition="all 1s"
            infinite={true}
            transitionDuration={500}
            removeArrowOnDeviceType={["mobile", "desktop"]}
          >
            <img
              src="kung fu panda 4.jpg"
              alt=""
              className="carousel-bgimg"
              loading="lazy"
            />
            <img
              src="apesplanet.jpg"
              alt=""
              className="carousel-bgimg"
              loading="lazy"
            />
            <img
              src="terminator.jpg"
              alt=""
              className="carousel-bgimg"
              loading="lazy"
            />
            <img
              src="dune.jpg"
              alt=""
              className="carousel-bgimg"
              loading="lazy"
            />
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
                  keyBoardControl={true}
                  autoPlay={true}
                  containerClass="movie"
                  pauseOnHover={false}
                  autoPlaySpeed={7000}
                  customTransition="all 1s"
                  infinite={true}
                  transitionDuration={500}
                  removeArrowOnDeviceType={["mobile", "desktop"]}
                >
                  <div>
                    <h1 className="movie-name">Kung Fu Panda 4</h1>
                    <p>
                      Po, the beloved dragon warrior, faces a new challenge when
                      a powerful villain threatens the peace of the Valley of
                      Peace, leading him on an epic journey of self-discovery
                      and kung fu mastery.
                    </p>
                    <p className="year">2024</p>
                    <p className="movie-type">Animation | Action | Adventure</p>
                  </div>
                  <div>
                    <h1 style={{ color: "#dc0073" }} className="movie-name">
                      Kingdom of the planet of the apes
                    </h1>
                    <p>
                      In a future where humans and intelligent apes coexist
                      precariously, young leader Nova must navigate rising
                      tensions to prevent a catastrophic war.
                    </p>
                    <p className="year">2024</p>
                    <p className="movie-type">Action | Sci-Fi</p>
                  </div>
                  <div>
                    <h1 className="movie-name">Terminator Genisys</h1>
                    <p>
                      A cyborg assassin targets the mother of a future
                      resistance leader, triggering a race against time as a
                      soldier from the future is deployed to protect her.
                    </p>
                    <p className="year">2015</p>
                    <p className="movie-type">Action | Adventure | Sci-Fi</p>
                  </div>
                  <div>
                    <h1 className="movie-name">Dune</h1>
                    <p>
                      In a future of scarce resources, a young noble navigates
                      political intrigue and desert perils to safeguard his
                      family's legacy.
                    </p>
                    <p className="year">2021</p>
                    <p className="movie-type">Action | Adventure | Drama</p>
                  </div>
                </Carousel>
              </div>

              <div className="watch">
                <div className="trailer-button">
                <button className="trailer" onClick={handleButtonClick}>Trailer</button> 
                  <button className="add-list">Add List</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainCarousel start={0} end={10} heading={"Popular Now"} />
      <MainCarousel start={10} end={20} heading={"Latest Releases"} />
      <MainCarousel start={20} end={30} heading={"Trending"} />
      <Toaster />
    </>
  );
});

export default Cinemaven;
