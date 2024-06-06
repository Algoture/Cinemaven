import { sendPasswordResetEmail } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../Index";
import { useState } from "react";
import "../css/Pages.scss";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  function resetPassword() {
    sendPasswordResetEmail(firebaseAuth, email)
      .then(() => {
        toast.success("Password reset email sent!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  }
  return (
    <div id="forgotPasswordPage">
      <div className="forgotCard">
        <div className="email">
          <img src="email.png" alt="" />
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            required
            value={email}
            autoComplete="on"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button onClick={resetPassword}>Reset Your Password</button>
      </div>
      <Toaster />
    </div>
  );
};

export default ForgotPasswordPage;
