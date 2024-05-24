import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselBox from "./CarouselBox";
import { moviesData } from "../../utils/Data.js";

const MainCarousel = ({ heading, start, end }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setMovies(moviesData);
    setLoading(false);
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
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
      <div className="section1">
        <p className="Trending">{heading}</p>
        {loading ? (
          <div className="loading">
            <div className="loader"></div>
          </div>
        ) : (
          <Carousel
            responsive={responsive}
            rewindWithAnimation={true}
            autoPlay={true}
            infinite={true}
            containerClass="container"
            autoPlaySpeed={2000}
            customTransition="all 2s"
            transitionDuration={700}
            removeArrowOnDeviceType={["mobile"]}
            swipeable={false}
          >
            {movies.length > 0 &&
              movies.slice(start, end).map((curElem) => {
                return <CarouselBox key={curElem} actualData={curElem} />;
              })}
          </Carousel>
        )}
      </div>
    </>
  );
};

export default MainCarousel;
