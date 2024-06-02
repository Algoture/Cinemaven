import { firebaseAuth } from "../Index";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import "../css/Pages.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  async function loginUser(event) {
    event.preventDefault();
    try {
      setLoading(true);
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      navigate("/cinemaven");
    } catch (error) {
      const errorMessage = error.message;
      if (
        errorMessage === "Firebase: Error (auth/invalid-login-credentials)."
      ) {
        toast.error("Invalid Email Or Password");
      }
    } finally {
      setLoading(false);
    }
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <div className="loginPage">
        <div className="loginCard">
          <p>Welcome Back !</p>
          <form
            action=""
            className="AuthForm"
            method="post"
            onSubmit={loginUser}
          >
            <div className="email">
              <img src="email.png" alt="" />
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
            </div>
            <div className="password">
              <img className="passwordimg" src="password.png" alt="" />
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
              <img
                src={showPassword ? "closed-eye.png" : "open-eye.png"}
                alt=""
                className="showpasswordicon"
                onClick={toggleShowPassword}
              />
            </div>
            <label className="passwordforgot">
              <NavLink to="/forgotPassword">Forgot Password?</NavLink>
            </label>
            <button type="submit" disabled={loading} id="submit">
              {loading ? (
                <div className="authloading">
                  <div className="authloader"></div>
                </div>
              ) : (
                "Login"
              )}
            </button>
            <h2>Or Sign In With</h2>
            <div id="signInWith">
              <div className="google">
                <img src="google.png" alt="" />
                Continue With Google
              </div>
              <div className="facebook">
                <img src="facebook.png" alt="" />
                Continue With FaceBook
              </div>
            </div>
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

export default LoginPage;
