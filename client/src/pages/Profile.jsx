import { Nav, firebaseAuth } from "../Index";
import { location_API_URL } from "../utils/Constants";
import { useNavigate } from "react-router-dom";
import "../css/Pages.scss";

import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";

const Profile = () => {
  const [location, setLocation] = useState("");
  const apidata = async () => {
    try {
      const res = await fetch(location_API_URL);
      const data = await res.json();
      setLocation(data);
    } catch (error) {
      const errormsg = error;
      console.log(errormsg);
    }
  };
  const navigate = useNavigate();
  const handleClick = () => {
    signOut(firebaseAuth);
    navigate("/");
  };

  useEffect(() => {
    apidata();
  }, []);

  return (
    <div className="profilePage">
      <Nav />
      <div className="Profilecontainer">
        <header>
          <h1>Profile</h1>
        </header>
        <div className="profile-info">
          <img src="user.png" alt="User Avatar" />
          <h2 id="username">{firebaseAuth.currentUser.displayName}</h2>
          <p>Email : {firebaseAuth.currentUser.email}</p>
          <p>
            Location: {location.city}, {location.region}, {location.country}
          </p>
        </div>
        <button id="logout" onClick={handleClick}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
