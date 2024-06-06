import { firebaseAuth, OAuth, EmailPassword } from "../Index";
import { NavLink, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import useAuthHandlers from "../utils/OAuths";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";

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
              google={handleGoogleSignIn}
              fb={handleFBSignIn}
              github={handleGitHubSignIn}
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
