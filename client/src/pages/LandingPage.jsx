import { useState, useEffect } from "react";
import { NavLink, CarouselM, Nav } from "../Index";
import "../css/LandingPage.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const LandingPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
            <div
              className="carousel-bgimg"
              style={{ filter: `blur(${scrollPosition * 0.05}px)` }}
            >
              <img src="kingdom-of-the-planet-of-the-apes.jpg" alt="" />
            </div>
            <div
              className="carousel-bgimg"
              style={{ filter: `blur(${scrollPosition * 0.05}px)` }}
            >
              <img src="terminator.jpg" alt="" />
            </div>
            <div
              className="carousel-bgimg"
              style={{ filter: `blur(${scrollPosition * 0.05}px)` }}
            >
              <img src="kung fu panda 4.jpg" alt="" />
            </div>
            <div
              className="carousel-bgimg"
              style={{ filter: `blur(${scrollPosition * 0.05}px)` }}
            >
              <img src="dune.jpg" alt="" />
            </div>
          </Carousel>
        </div>
        <div className="main">
          <div className="trending-movie">
            {scrollPosition === 0 ? <div className="gradient"></div> : null}
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
                  <div>
                    <h1 style={{ color: "#dc0073" }}>
                      Kingdom of the planet of the apes
                    </h1>
                    <p>
                      In a future where humans and intelligent apes coexist
                      precariously, young leader Nova must navigate rising
                      tensions to prevent a catastrophic war.
                    </p>
                  </div>
                  <div>
                    <h1>Terminator</h1>
                    <p>
                      A cyborg assassin targets the mother of a future
                      resistance leader, triggering a race against time as a
                      soldier from the future is deployed to protect her.
                    </p>
                  </div>
                  <div>
                    <h1>Kung Fu Panda 4</h1>
                    <p>
                      Po, the beloved dragon warrior, faces a new challenge when
                      a powerful villain threatens the peace of the Valley of
                      Peace, leading him on an epic journey of self-discovery
                      and kung fu mastery.
                    </p>
                  </div>
                  <div>
                    <h1>Dune</h1>
                    <p>
                      In a future of scarce resources, a young noble navigates
                      political intrigue and desert perils to safeguard his
                      family's legacy.
                    </p>
                  </div>
                </Carousel>
              </div>

              <div className="watch">
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
