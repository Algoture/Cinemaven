import { signOut, firebaseAuth, NavLink, useNavigate,toast,Toaster } from "../Index";
const Cinemaven = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    signOut(firebaseAuth);
    navigate("/");
  };
  return (
    <div>
      This is Content !
      <button onClick={()=>{toast.success("Wow")}}>Click Me</button>
      <NavLink to="/">Home</NavLink>
      <button onClick={handleClick}>Logout</button>
      <Toaster />
    </div>
  );
};

export default Cinemaven;
