import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { login, logout, selectUser } from "./app/UserSlice";
import "./css/App.scss";
import "./css/Components.scss";
import "./css/MediaQueries.scss";
import {
  TrailerPage,
  LoginPage,
  Register,
  ProfilePage,
  Favourite,
  Cinemaven,
  LandingPage,
  Page404,
  AllPage,
  TvShowsPage,
  MorePage,
  SearchPage,
  firebaseAuth,
} from "./Index";
import TeaserPage from "./pages/TeaserPage";
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
        <Route path="/" element={user ? <Cinemaven /> : <LandingPage />} />
        <Route path="/login" element={user ? <Cinemaven /> : <LoginPage />} />
        <Route path="/register" element={user ? <Cinemaven /> : <Register />} />
        <Route
          path="/favourite"
          element={user ? <Favourite /> : <LoginPrompt />}
        />
        <Route path="/all" element={user ? <AllPage /> : <LoginPrompt />} />
        <Route
          path="/tvshows"
          element={user ? <TvShowsPage /> : <LoginPrompt />}
        />
        <Route path="/more" element={user ? <MorePage /> : <LoginPrompt />} />
        <Route
          path="/cinemaven"
          element={user ? <Cinemaven /> : <LoginPrompt />}
        />
        <Route
          path="/profile"
          element={user ? <ProfilePage /> : <LoginPrompt />}
        />
        <Route
          path="/search"
          element={user ? <SearchPage /> : <LoginPrompt />}
        />
        <Route
          path="/movies"
          element={user ? <TrailerPage /> : <LoginPrompt />}
        />
        <Route
          path="/teaser"
          element={user ? <TeaserPage /> : <LoginPrompt />}
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

function LoginPrompt() {
  return (
    <div className="access">
      <img src="lock.png" alt="" />
      <p>Please login to access Cinemaven</p>
      <button id="access-button">
        <NavLink to="/login">Login</NavLink>
      </button>
    </div>
  );
}

export default App;
