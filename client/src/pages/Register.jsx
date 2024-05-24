import { firebaseAuth } from "../Index";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import "../css/Pages.scss";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  async function registration(event) {
    event.preventDefault();
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      await updateProfile(firebaseAuth.currentUser, { displayName: name });
      toast.success("Account Created  Successfully!");
      alert("Account Created  Successfully!");
      navigate("/login");
    } catch (error) {
      const errorMessage = error.message;
      if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
        toast.error("Email already in use");
      }
    } finally {
      setLoading(false);
    }
    setEmail("");
    setName("");
    setPassword("");
  }
  return (
    <>
      <div className="registrationPage">
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
                "Register"
              )}
            </button>
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
