import "./css/App.scss";
import "./css/Pages.scss";
import "./css/Components.scss";
import "./css/MediaQueries.scss";
import {
  Login,
  Register,
  createBrowserRouter,
  RouterProvider,
  Home,
  Cinemaven,
  LandingPage
} from "./Index";


function App() {
  const appRouter = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/", element: <LandingPage /> },
    { path: "/cinemaven", element: <Cinemaven /> },
    { path: "/register", element: <Register /> },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
