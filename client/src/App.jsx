import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { getCLS, getFID, getLCP } from "web-vitals";
import { login, logout, selectUser } from "./app/UserSlice";
import "./css/App.scss";
import "./css/Components.scss";
import "./css/MediaQueries.scss";
import {
  LoginPage,
  Register,
  Profile,
  Favourite,
  Cinemaven,
  LandingPage,
  Page404,
  Nav,
  firebaseAuth,
} from "./Index";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
      setAuthChecked(true);
    });

    // Measure Web Vitals
    const reportWebVitals = ({ name, value }) => {
      switch (name) {
        case "CLS":
          console.log(`Cumulative Layout Shift: ${value}`);
          break;
        case "FID":
          console.log(`First Input Delay: ${value}`);
          break;
        case "LCP":
          console.log(`Largest Contentful Paint: ${value}`);
          break;
        default:
          break;
      }
    };

    getCLS(reportWebVitals);
    getFID(reportWebVitals);
    getLCP(reportWebVitals);

    return () => unsubscribe();
  }, [dispatch]);
  if (!authChecked) {
    return (
      <div className="loading">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Cinemaven /> : <LandingPage/>} />
        <Route path="/login" element={user ? <Cinemaven /> : <LoginPage />} />
        <Route path="/register" element={user ? <Cinemaven /> : <Register />} />
        <Route
          path="/favourite"
          element={user ? <Favourite /> : <LoginPrompt />}
        />
        <Route
          path="/cinemaven"
          element={user ? <Cinemaven /> : <LoginPrompt />}
        />
        <Route path="/profile" element={user ? <Profile /> : <LoginPrompt />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

function LoginPrompt() {
  return (
    <div>
      <p style={{ color: "black" }}>Please login to access</p>
      <NavLink to="/login" style={{ color: "black", marginLeft: "4vw" }}>
        Login
      </NavLink>
    </div>
  );
}

export default App;
