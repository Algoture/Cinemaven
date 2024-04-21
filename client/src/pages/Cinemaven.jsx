import React from "react";
import { firebaseAuth, MainCarousel, Nav } from "../Index";
import { signOut } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "../css/Cinemaven.scss";
import "react-multi-carousel/lib/styles.css";
import "../css/Pages.scss";

const Cinemaven = React.memo(() => {
  const navigate = useNavigate();
  const handleClick = () => {
    signOut(firebaseAuth);
    navigate("/");
  };

  const movies = [
    {
      bgimage: "https://images8.alphacoders.com/134/1344546.jpeg",
      image: "kung fu panda 4.jpg",
      trailer: "_inKs4eeHiI",
      title: "Kung Fu Panda 4",
      year: "2024",
      description:
        "Po, the beloved dragon warrior, faces a new challenge when a powerful villain threatens the peace of the Valley of Peace, leading him on an epic journey of self-discovery and kung fu mastery. Horror / Thriller",
    },
    {
      bgimage: "apesbgimage.jpg",
      image: "apesplanet.jpg",
      trailer: "XtFI7SNtVpY",
      title: "Kingdom of the planet of the apes",
      year: "2024",
      description:
        "In a future where humans and intelligent apes coexist precariously, young leader Nova must navigate rising tensions to prevent a catastrophic war. Action | Sci-Fi",
    },
    {
      bgimage: "terminatorbgimage.jpg",
      image: "terminator.jpg",
      trailer: "jNU_jrPxs-0",
      title: "Terminator Genisys",
      year: "2015",
      description:
        "A cyborg assassin targets the mother of a future resistance leader, triggering a race against time as a soldier from the future is deployed to protect her. Action | Adventure | Sci-Fi",
    },
    {
      bgimage: "dunebgimage.jpg",
      image: "dune.jpg",
      trailer: "n9xhJrPXop4",
      title: "Dune",
      year: "2021",
      description:
        "In a future of scarce resources, a young noble navigates political intrigue and desert perils to safeguard his family legacy. Action | Adventure | Drama",
    },
  ];

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
            autoPlaySpeed={7000}
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
                  {movies.map((movie, index) => (
                    <div key={index}>
                      <h1 className="movie-name">{movie.title}</h1>
                      <p>{movie.description}</p>
                      <p className="year">{movie.year}</p>
                      <div className="trailer-button">
                        <button onClick={() => handleButtonClick(movie)}>
                          Trailer
                        </button>
                        <button className="add-list">Add List</button>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MainCarousel start={0} end={10} heading={"Popular Now"} />
      <MainCarousel start={10} end={20} heading={"Latest Releases"} />
      <MainCarousel start={20} end={30} heading={"Trending"} />
    </>
  );
});

export default Cinemaven;
