import { firebaseAuth } from "../Index";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../css/Pages.scss";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    signOut(firebaseAuth);
    navigate("/");
  };
  return (
    <div className="landingPage">
      <p>Welcome To Cinemaven</p>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default LandingPage;
