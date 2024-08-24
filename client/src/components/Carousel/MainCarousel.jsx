import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselBox from "./CarouselBox";
import axios from "axios";
const MainCarousel = ({ heading, start, end, kilas }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("https://cinemavenserver.onrender.com/api/movies/moviesData").then((res) => {
      setMovies(res.data.myData);
      setLoading(false);
    });
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
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
      <div className={`section1 ${kilas}`}>
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
            // customTransition="all 2s"
            transitionDuration={700}
            pauseOnHover={true}
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
