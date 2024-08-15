import { BackButton, EmailPassword, firebaseAuth } from "../Index";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  isSignInWithEmailLink,
  signInWithEmailLink,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";

const EmailAuthPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginOrRegister, setLoginOrRegister] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
            toast.success(
              `Welcome Back ${firebaseAuth.currentUser.displayName} !`
            );
            setTimeout(() => {
              navigate("/cinemaven");
            }, 4000);
          } else {
            toast.error("Please verify your email!");
          }
        })
        .catch(() => {
          toast.error("Error verifying email link");
        });
    }
  }, [firebaseAuth, navigate]);
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
    setTimeout(() => {
      setShowPassword(false);
    }, 4000);
  };
  function authSwitch() {
    setLoginOrRegister((prevState) => !prevState);
  }
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
        toast.success(`Welcome Back ${firebaseAuth.currentUser.displayName} !`);
        setTimeout(() => {
          navigate("/cinemaven");
        }, 2000);
      } else {
        toast.error("Please verify your email!");
      }
    } catch (error) {
      toast.error("Login Failed");
      toast.error("Invalid Email Or Password");
    } finally {
      setLoading(false);
      setEmail("");
      setPassword("");
    }
  }
  async function registration(event) {
    event.preventDefault();
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      await updateProfile(firebaseAuth.currentUser, { displayName: name });
      await sendEmailVerification(firebaseAuth.currentUser);
      toast.success("Verification email sent!");
      toast.success("Please Verify Your Email !");
      setTimeout(() => {
        setLoginOrRegister(true);
      }, 2000);
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
    <div id="emailPage">
      <BackButton />
      <div className="emailPageCard">
        <EmailPassword
          email={email}
          setEmail={setEmail}
          password={password}
          showPassword={showPassword}
          setPassword={setPassword}
          toggleShowPassword={toggleShowPassword}
          loading={loading}
          forgot={loginOrRegister}
          auth={loginOrRegister ? "Login" : "Register"}
          name={name}
          setName={setName}
          submit={loginOrRegister ? loginUser : registration}
        />
        <span>
          {loginOrRegister ? "Don't have an account?" : "Already Registered?"}
          <button id="registerbtn" onClick={authSwitch}>
            {loginOrRegister ? "Register" : "Login"}
          </button>
        </span>
      </div>
      <Toaster />
    </div>
  );
};

export default EmailAuthPage;
