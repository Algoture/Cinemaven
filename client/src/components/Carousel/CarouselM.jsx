import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselBox from "./CarouselBox";
import { API_url_Trending, options } from "../../utils/Constants";

const CarouselM = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await fetch(API_url_Trending, options);
        // const data = await res.json();
        console.log(data);
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
      items: 5,
    },
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
      {loading ? (
        <div className="loading">
          <div className="loader"></div>
        </div>
      ) : (
        <Carousel
          responsive={responsive}
          showDots={false}
          draggable={true}
          autoPlay={true}
          partialVisible
          containerClass="container"
          autoPlaySpeed={2000}
          customTransition="all 1s"
          infinite={true}
          transitionDuration={500}
          removeArrowOnDeviceType={["mobile"]}
          swipeable={true}
        >
          {movies.slice(0, 10).length > 0 &&
            movies.map((curElem) => {
              return <CarouselBox key={curElem} actualData={curElem} />;
            })}
        </Carousel>
      )}
      {loading ? (
        <div className="loading">
          <div className="loader"></div>
        </div>
      ) : (
        <Carousel
          responsive={responsive}
          showDots={false}
          draggable={true}
          autoPlay={true}
          partialVisible
          containerClass="container"
          autoPlaySpeed={2000}
          customTransition="all 1s"
          infinite={true}
          transitionDuration={500}
          removeArrowOnDeviceType={["mobile"]}
          swipeable={true}
        >
          {movies.slice(10, 20).length > 0 &&
            movies.map((curElem) => {
              return <CarouselBox key={curElem} actualData={curElem} />;
            })}
        </Carousel>
      )}
    </>
  );
};

export default CarouselM;
