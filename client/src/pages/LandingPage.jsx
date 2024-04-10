import { useNavigate } from "react-router-dom";
import "../css/LandingPage.scss";
import "../css/Pages.scss";
import { useState } from "react";

const LandingPage = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };
  return (
    <div id="landingPage">
      <div className="outercontainer">
        <div className="clappercontainer">
          <div className="hinge">
            <p className="hinge__rivet hinge__rivet--top">⚪️</p>
            <p className="hinge__rivet hinge__rivet--bottomleft">⚪️</p>
            <p className="hinge__rivet hinge__rivet--bottomright">⚪️</p>
          </div>
          <div className={isHovered ? "clapper__top rotate" : "clapper__top"}>
            <div className="clapper__top--white" />
            <div className="clapper__top--white" />
            <div className="clapper__top--white" />
            <div className="clapper__top--white" />
            <div className="clapper__top--white" />
          </div>
          <div className="LandingContainer">
            <div className="clapper__bottom">
              <div className="clapper__bottom--white" />
              <div className="clapper__bottom--white" />
              <div className="clapper__bottom--white" />
              <div className="clapper__bottom--white" />
              <div className="clapper__bottom--white" />
            </div>
            <div className="info-container">
              <div className="mera">
                <h1>Cinemaven</h1>
                <button
                  className="getStart"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Get Started
                </button>
              </div>
              <div className="scene-take-roll">
                <div className="scene">
                  <p className="text">Scene:</p>
                  <p className="scene__text test">2</p>
                </div>
                <div className="take">
                  <p className="text">Take:</p>
                  <p className="take__text test">5</p>
                </div>
                <div className="roll">
                  <p className="text">Roll:</p>
                  <p className="roll__text test">4</p>
                </div>
              </div>
              <div className="director">
                <p className="text">Director:</p>
                <p className="test">Samyack Bansode</p>
              </div>
              <div className="producer">
                <p className="text">Producer:</p>
                <p className="test">Shesh Nalwar</p>
              </div>
              <div className="cinematographer">
                <p className="text">Cinematographer:</p>
                <p className="test">Umesh Nagare</p>
              </div>
              <div className="rapper">
                <p className="text">Rapper :</p>
                <p className="test">Abhishek Deshpande</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
