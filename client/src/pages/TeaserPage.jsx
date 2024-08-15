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
        
      <div className="MoviesPage">
        <div
          className="gradient"
          // style={{ "--poster-url": `url(${movie.bgimage})` }}
          
        >
          <img src="https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=2958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

        <div className="teaser-details">
          <h1 className="treaserh1">{title}</h1>
          <h2 className="teaserh1">Release Date:{releaseDate}</h2>
          <h3 className="teaserh1">Trailer length:{trailerLength}</h3>
        </div>
        <div className="components" >
          <div className="movie-card card-trailer"style={{width: "20vw"}} >
            <div className="content-card" style={{width: "20vw"}}>
            <a href={videoLink} target="_blank">
            <img src={image} alt={title}  />
              <span className="shadow"></span>
              <div className="content" >
                <h1>Trailer</h1>
                {/* <b>{movie.trailerLength}</b> */}
              </div>
            </a>
             
            </div>
            <div className="watch-card" onClick={()=>{
              window.open(videoLink,"_blank");
            }}>
              <a href={videoLink} target="_blank">
                <button href={videoLink}>watch now</button>
                {console.log(videoLink)}
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
    </div>
    </>
  );
};

export default TeaserPage;
