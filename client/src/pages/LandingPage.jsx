import { NavLink, CarouselM, Nav } from "../Index";
import "../css/LandingPage.scss";

const LandingPage = () => {
  return (
    <>
      <Nav/>
      <div className="landing">
        <div className="bg-img">
          <img src="Shaitaan.png" alt="" />
        </div>

        <div className="main">
          <div className="trending-movie">
            <div className="gradient"></div>

            <div className="content">
              <div className="options">
                <NavLink to="/all" className="navlinks">
                  All
                </NavLink>
                <NavLink to="/tvshows" className="navlinks">
                  TV Shows
                </NavLink>
                <NavLink to="/more" className="navlinks">
                  More
                </NavLink>
              </div>

              <div className="movie">
                <h1>SHAITAN</h1>
                <div className="year">
                  <p>2024</p>
                </div>
                <p>
                  A timeless tale of battle between good and evil with a family
                  embodying the forces of righteousness while a man symbolizes
                  malevolence.
                </p>
              </div>

              <div className="watch">
                <button className="watch-now">Watch</button>

                <div className="trailer-button">
                  <button className="trailer">Trailer</button>
                  <button className="add-list">Add List</button>
                </div>
              </div>
            </div>
          </div>

          <div className="login">
            <NavLink to="/login">
              <button className="login-btn">Log In</button>
            </NavLink>
          </div>
        </div>
      </div>
      <CarouselM />
    </>
  );
};

export default LandingPage;
