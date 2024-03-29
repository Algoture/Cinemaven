import "./css/App.scss";
import "./css/Pages.scss";
import "./css/Components.scss";
import "./css/MediaQueries.scss";
import {
  Login,
  Register,
  createBrowserRouter,
  RouterProvider,
  Cinemaven,
  Profile,
  Favourite,
  LandingPage,
} from "./Index";

function App() {
  const appRouter = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/", element: <LandingPage /> },
    { path: "/cinemaven", element: <Cinemaven /> },
    { path: "/register", element: <Register /> },
    { path: "/favourite", element: <Favourite /> },
    { path: "/profile", element: <Profile /> },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
