import "./css/App.scss";
import "./css/Pages.scss";
import "./css/Components.scss";
import "./css/MediaQueries.scss";
import {
  Login,
  Register,
  createBrowserRouter,
  RouterProvider,
  Nav,
  Home,
  Cinemaven,
  CarouselM,
} from "./Index";


function App() {
  const appRouter = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/", element: <Home /> },
    { path: "/cinemaven", element: <Cinemaven /> },
    { path: "/register", element: <Register /> },
    { path: "/carousel", element: <CarouselM /> },
  ]);
  return (
    <>
      {/* <Nav /> */}
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
