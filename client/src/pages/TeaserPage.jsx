import { useLocation } from "react-router-dom";
import { Nav } from "../Index";
import "../css/Pages.scss";

const TeaserPage = () => {
  const location = useLocation();
  const { title, videoLink, image, trailerLength, releaseDate } =
    location.state || {};
  return (
    <>
      <Nav />
      <div className="teaserpage">
        <div className="teaserdetails">
          <h1 className="teaserh1">{title}</h1>
          <h2 className="teaserh1">Release Date : {releaseDate}</h2>
          <h3 className="teaserh1">Trailer Length : {trailerLength}</h3>
        </div>
        <div className="teaserCards">
          <div className="card-trailer">
            <div className="content-card">
              <img src={image} alt={title} className="teaserimage" />
              <span className="shadow"></span>
              <div className="content">
                <h1 style={{ color: "black", fontSize: "1rem" }}>Trailer</h1>
                <b>{trailerLength}</b>
              </div>
            </div>
            <div className="watch-card">
              <a href={videoLink} target="_blank">
                <button>watch now</button>
              </a>
            </div>
          </div>
          {/* <div className="card-movie" >
            <div className="content-card">
              <span className="shadow"></span>
              <div className="content">
                <h1>MOVIE</h1>
              </div>
            </div>
            <div className="watch-card">
              <button>watch now</button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default TeaserPage;
