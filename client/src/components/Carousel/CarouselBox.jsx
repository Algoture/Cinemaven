const CarouselBox = ({ actualData }) => {
  const { image, title, videoLink } = actualData;
  if (!image) {
    return null;
  }

  return (
    <div className="carousel">
      <div className="wrapper">
        <div className="banner-image">
          <img src={image} alt={title} />
          <div className="carousel-img-container">
            <a href={videoLink} target="_blank">
              <button className="trailer">Trailer</button>
            </a>
            <button className="wish-list">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselBox;
