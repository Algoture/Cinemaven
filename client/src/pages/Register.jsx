import { firebaseAuth, OAuth, EmailPassword } from "../Index";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  sendEmailVerification,
  FacebookAuthProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import useAuthHandlers from "../utils/OAuths";

import "../css/Pages.scss";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { handleGoogleSignIn, handleFBSignIn, handleGitHubSignIn } =
    useAuthHandlers();
  const navigate = useNavigate();
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const emailPasswordProps = {
    email,
    setEmail,
    password,
    showPassword,
    setPassword,
    toggleShowPassword,
    loading,
    forgot: false,
    auth: "Register",
  };

  async function registration(event) {
    event.preventDefault();
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      await updateProfile(firebaseAuth.currentUser, { displayName: name });
      await sendEmailVerification(firebaseAuth.currentUser);
      navigate("/login");
      toast.success("Verification email sent!");
      alert("Please Verify Your Email !");
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
            <input
              type="text"
              name="username"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
              required
            />
            <EmailPassword {...emailPasswordProps} />
            <OAuth
              handleGoogleSignIn={handleGoogleSignIn}
              handleFBSignIn={handleFBSignIn}
              handleGitHubSignIn={handleGitHubSignIn}
            />
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
