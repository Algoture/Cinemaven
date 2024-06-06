import { firebaseAuth, OAuth, EmailPassword } from "../Index";
import { NavLink, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import useAuthHandlers from "../utils/OAuths";
import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import "../css/Pages.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { handleGoogleSignIn, handleFBSignIn, handleGitHubSignIn } =
    useAuthHandlers();
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  useEffect(() => {
    if (isSignInWithEmailLink(firebaseAuth, window.location.href)) {
      let email = window.localStorage.getItem("emailForSignIn");
      if (!email) {
        email = window.prompt("Please provide your email for confirmation");
      }
      signInWithEmailLink(firebaseAuth, email, window.location.href)
        .then((result) => {
          window.localStorage.removeItem("emailForSignIn");
          if (result.user.emailVerified) {
            navigate("/cinemaven");
          } else {
            toast.error("Please verify your email!");
          }
        })
        .catch(() => {
          toast.error("Error verifying email link");
        });
    }
  }, [firebaseAuth, navigate]);

  async function loginUser(event) {
    event.preventDefault();
    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      const user = userCredential.user;
      if (user.emailVerified) {
        navigate("/cinemaven");
      } else {
        toast.error("Please verify your email!");
      }
    } catch (error) {
      const errorMessage = error.message;
      if (
        errorMessage.includes("auth/wrong-password") ||
        errorMessage.includes("auth/user-not-found")
      ) {
        toast.error("Invalid Email Or Password");
      } else {
        toast.error("Login Failed");
        toast.error("Invalid Email Or Password");
      }
    } finally {
      setLoading(false);
      setEmail("");
      setPassword("");
    }
  }
  const emailPasswordProps = {
    email,
    setEmail,
    password,
    showPassword,
    setPassword,
    toggleShowPassword,
    loading,
    forgot: true,
    auth: "Login",
  };
  return (
    <>
      <div className="loginPage">
        <div className="loginCard">
          <p>Welcome Back!</p>
          <form className="AuthForm" onSubmit={loginUser}>
            <EmailPassword {...emailPasswordProps} />
            <OAuth
              handleGoogleSignIn={handleGoogleSignIn}
              handleFBSignIn={handleFBSignIn}
              handleGitHubSignIn={handleGitHubSignIn}
            />
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
