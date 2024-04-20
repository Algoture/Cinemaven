// Pages :
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Cinemaven from "./pages/Cinemaven";
import Favourite from "./pages/Favourite";
import ProfilePage from "./pages/ProfilePage";
import Page404 from "./pages/Page404";
import AllPage from "./pages/AllPage";
import TvShowsPage from "./pages/TvShowsPage";
import MorePage from "./pages/MorePage";
import SearchPage from "./pages/SearchPage";
import TrailerPage from "./pages/TrailerPage";

// Components :
import Nav from "./components/Nav";
import MainCarousel from "./components/Carousel/MainCarousel";

// Utilities :
import { firebaseAuth } from "./utils/firebase";

// Export Pages  :
export {
  TrailerPage,
  SearchPage,
  MorePage,
  TvShowsPage,
  Page404,
  AllPage,
  ProfilePage,
  Cinemaven,
  Favourite,
  LoginPage,
  Register,
  LandingPage,
};

// Export Components  :
export { MainCarousel, Nav };

// Export Utils  :
export { firebaseAuth };
