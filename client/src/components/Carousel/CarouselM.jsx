import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselBox from "./CarouselBox";

const CarouselM = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_url_Trending = "https://moviesverse1.p.rapidapi.com/get-trending-trailers";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c5748210a8msh5db716484c3032bp115ac4jsn66d6b447bf34",
      "X-RapidAPI-Host": "moviesverse1.p.rapidapi.com",
    },
  }

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
        <div className="loading"><div className="loader"></div></div>
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
          {movies.length > 0 &&
            movies.map((curElem) => {
              return <CarouselBox key={curElem} actualData={curElem} />;
            })}
        </Carousel>
      )}
    </>
  );
};

export default CarouselM;
