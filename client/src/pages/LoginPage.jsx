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
              <img
                  src={showPassword ? "closed-eye.png" : "open-eye.png"}
                  alt=""
                  onClick={toggleShowPassword}
                />
            </div>
            <button type="submit" disabled={loading}>
              {loading ? (
                <div className="authloading">
                  <div className="authloader"></div>
                </div>
              ) : (
                "Login"
              )}
            </button>
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
