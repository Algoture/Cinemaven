import { useNavigate } from "react-router-dom";
import "../css/Pages.scss";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div id="landingPage">
      <img src="Logo.png" alt="" />
      <h1>
        Welcome To&nbsp;<span>Cinemaven</span>
      </h1>
      <button
        className="getStart"
        onClick={() => {
          navigate("/login");
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
