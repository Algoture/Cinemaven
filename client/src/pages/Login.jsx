import {
  firebaseAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  useState,
  useEffect,
  NavLink,
  toast,
  Toaster,
  useNavigate,
} from "../Index";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  async function loginUser(event) {
    event.preventDefault();
    try {
      let res = await signInWithEmailAndPassword(firebaseAuth, email, password);
      navigate("/cinemaven");
    } catch (error) {
      toast.error(error);
    }
    setEmail("");
    setPassword("");
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        navigate("/cinemaven");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <>
      <div className="loginPage">
        <NavLink to="/">Home</NavLink>
        <div className="loginCard">
          <p>Welcome Back !</p>
          <form
            action=""
            className="AuthForm"
            method="post"
            onSubmit={loginUser}
          >
            <label>
              <b>Email</b>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
              autoFocus
              autoComplete="on"
            />
            <label className="passwordforgot">
              <b>Password</b>
              <NavLink to="">Forgot Password?</NavLink>
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
            <button type="submit">Login</button>
          </form>
          <span>
            Don't have an account? <NavLink to="/register">Register</NavLink>
          </span>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Login;
