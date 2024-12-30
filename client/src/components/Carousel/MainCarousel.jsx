import { responsive1 } from "../../utils/carouselUtils";
import { useQuery } from "@tanstack/react-query";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import CarouselBox from "./CarouselBox";
import toast from "react-hot-toast";
import axios from "axios";

const MainCarousel = ({ heading, start, end, kilas }) => {
  const fetchMovies = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/movies/moviesData`
    );
    return res.data.myData;
  };
  const {
    data: movies,
    loading,
    error,
  } = useQuery({
    queryKey: ["moviesData"],
    queryFn: fetchMovies,
    cacheTime: 600000,
  });
  if (!movies || movies.length <= 0) {
    return toast.error("No Movies Found");
  }
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
            responsive={responsive1}
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
