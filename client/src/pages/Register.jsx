import {
  firebaseAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  useState,
  NavLink,
  toast,
  Toaster,
  useNavigate,
} from "../Index";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  async function registration(event) {
    event.preventDefault();
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      await updateProfile(firebaseAuth.currentUser, { displayName: name });
      toast.success("Account Created  Successfully!");
      navigate("/login");
    } catch (error) {
      toast.error(error);
    }
    setEmail("");
    setName("");
    setPassword("");
  }
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/cinemaven");
  });
  return (
    <>
      <div className="registrationPage">
        <NavLink to="/">Home </NavLink>
        <div className="registerCard">
          <form id="signupForm" onSubmit={registration}>
            <p>Sign Up</p>
            <label>
              <b>Name</b>
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
              required
            />
            <label>
              <b>Email</b>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              required
              value={email}
              autoComplete="on"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>
              <b>Password</b>
            </label>
            <div className="password">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                id="password"
                autoComplete="current-password"
              />
              {/* <img
                src={showPassword ? "closed-eye.png" : "open-eye.png"}
                alt=""
                onClick={toggleShowPassword}
              /> */}
            </div>
            <button type="submit">Sign Up</button>
          </form>
          <span>
            Already Registered? <NavLink to="/login">Login</NavLink>
          </span>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Register;
