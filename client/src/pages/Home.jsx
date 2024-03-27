import { NavLink ,CarouselM} from "../Index";
const Home = () => {
  return (
    <>
      <h1>Welcome To The Home !</h1>
      <NavLink to="/login">Login</NavLink>
      <br />
      <NavLink to="/register">Register</NavLink>
      <CarouselM/>
    </>
  );
};

export default Home;
