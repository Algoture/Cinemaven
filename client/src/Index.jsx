// Pages :
import AllAuthPage from "./pages/AllAuthPage";
import LandingPage from "./pages/LandingPage";
import Cinemaven from "./pages/Cinemaven";
import Favourite from "./pages/Favourite";
import ProfilePage from "./pages/ProfilePage";
import Page404 from "./pages/Page404";
import AllPage from "./pages/AllPage";
import TvShowsPage from "./pages/TvShowsPage";
import MorePage from "./pages/MorePage";
import SearchPage from "./pages/SearchPage";
import TrailerPage from "./pages/TrailerPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import TeaserPage from "./pages/TeaserPage";
import EmailAuthPage from "./pages/EmailAuthPage";

// Components :
import Nav from "./components/Nav";
import EmailPassword from "./components/EmailPassword";
import MainCarousel from "./components/Carousel/MainCarousel";
import AuthProvidersBtn from "./components/AuthProvidersBtn";
import BackButton from "./components/BackButton";

// Utilities :
import { firebaseAuth } from "./utils/firebase";

// Export Pages  :
export {
  EmailAuthPage,
  TeaserPage,
  ForgotPasswordPage,
  TrailerPage,
  SearchPage,
  MorePage,
  TvShowsPage,
  Page404,
  AllPage,
  ProfilePage,
  Cinemaven,
  Favourite,
  AllAuthPage,
  LandingPage,
};

// Export Components  :
export { MainCarousel, Nav, EmailPassword, AuthProvidersBtn, BackButton };

// Export Utils  :
export { firebaseAuth };
