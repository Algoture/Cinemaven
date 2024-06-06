import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { firebaseAuth } from "../Index";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useAuthHandlers = () => {
  const navigate = useNavigate();
  const googleSignIn = async () => {
    try {
      const googleAuth = new GoogleAuthProvider();
      await signInWithPopup(firebaseAuth, googleAuth);
      navigate("/cinemaven");
    } catch (error) {
      toast.error("Google Sign-In Failed");
    }
  };
  const fBSignIn = async () => {
    try {
      const fbAuth = new FacebookAuthProvider();
      await signInWithPopup(firebaseAuth, fbAuth);
      navigate("/cinemaven");
    } catch (error) {
      toast.error("Facebook Sign-In Failed");
    }
  };
  const gitHubSignIn = async () => {
    try {
      const githubAuth = new GithubAuthProvider();
      await signInWithPopup(firebaseAuth, githubAuth);
      navigate("/cinemaven");
    } catch (error) {
      toast.error("GitHub Sign-In Failed");
    }
  };
  return { googleSignIn, fBSignIn, gitHubSignIn };
};

export default useAuthHandlers;
