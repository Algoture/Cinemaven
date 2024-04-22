import { Nav, firebaseAuth } from "../Index";
import { useNavigate } from "react-router-dom";
import "../css/ProfilePage.css";
import { signOut } from "firebase/auth";

const ProfilePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    signOut(firebaseAuth);
    navigate("/");
  };
  return (
    <div className="profilePage">
    <Nav />
      <div className="Profilecontainer">
        <div className="profile-card">
          <div className="profile-header">
            <div className="main-profile">
              <img
                className="profile-image"
                src="avatar.png"
                alt="Profile Image"
              />
              <div className="profile-names">
                <h1 className="username">
                  {firebaseAuth.currentUser.displayName}
                </h1>
                <small className="email">
                  {firebaseAuth.currentUser.email}
                </small>
                <button onClick={handleClick} className="logoutbutton">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
