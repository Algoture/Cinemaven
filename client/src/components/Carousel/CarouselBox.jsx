import { useNavigate } from "react-router-dom";

const CarouselBox = ({ actualData }) => {
  const { image, title, videoLink, trailerLength, releaseDate } = actualData;
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/teaser", {
      state: { title, videoLink, image, trailerLength, releaseDate },
    });
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
            <button className="wish-list">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselBox;
