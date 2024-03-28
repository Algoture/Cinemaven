const CarouselBox = ({ actualData }) => {
  const { image,title,videoLink} = actualData;
  if (!image) {
    return null;
  }

  return (
    <div className="carousel">
      <div className="wrapper">
        <div className="banner-image">
          <img src={image} alt={title} />
          <a href={videoLink} target="_blank"><button>Click</button></a>
        </div>
      </div>
    </div>
  );
};

export default CarouselBox;
