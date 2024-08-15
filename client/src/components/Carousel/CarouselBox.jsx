import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../../app/UserSlice";
import { useState } from "react";

const CarouselBox = ({ actualData }) => {
  const { image, title, videoLink, trailerLength, releaseDate } = actualData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);
  const handleButtonClick = () => {
    navigate("/teaser", {
      state: { title, videoLink, image, trailerLength, releaseDate },
    });
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(actualData));
    setFlag(true);
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
              {flag ? "✓":"+" }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselBox;
