import { useEffect, useState, useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselBox from "./CarouselBox";
import { API_url_Trending, options } from "../../utils/Constants";

const MainCarousel = ({ heading, start, end }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchedData = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!fetchedData.current) {
          // const res = await fetch(API_url_Trending, options);
          // const data = await res.json();
          // console.log(data);
          setMovies(data.trailers);
          setLoading(false);
          fetchedData.current = true;
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
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
            swipeable={true}
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
