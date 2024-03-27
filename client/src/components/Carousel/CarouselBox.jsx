const CarouselBox = ({ actualData }) => {
  const { image,title} = actualData;
  if (!image) {
    return null;
  }

  return (
    <div className="carousel">
      <div className="wrapper">
        <div className="banner-image">
          <img src={image} alt={title} />
          <button>Click Me</button>
        </div>
      </div>
    </div>
  );
};

export default CarouselBox;
