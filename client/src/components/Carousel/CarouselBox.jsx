import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../app/UserSlice";

const CarouselBox = ({ actualData }) => {
  const { image, title, videoLink, trailerLength, releaseDate } = actualData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    navigate("/teaser", {
      state: { title, videoLink, image, trailerLength, releaseDate },
    });
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(actualData));
  };

  if (!image) {
    return null;
  }

  return (
    <div className="carousel">
      <div className="wrapper">
        <div className="banner-image">
          <img src={image} alt={title} />
          <div className="carousel-img-container">
            <button className="trailer" onClick={handleButtonClick}>
              Watch
            </button>
            <button className="wish-list" onClick={handleAddToWishlist}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselBox;
