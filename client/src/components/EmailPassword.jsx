import { NavLink } from "react-router-dom";
import "../css/Components.scss";
const EmailPassword = ({
  email,
  setEmail,
  password,
  showPassword,
  setPassword,
  toggleShowPassword,
  loading,
  forgot,
  auth,
}) => {
  return (
    <div id="emailPassword">
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
      <div
        className="passwordforgot"
        style={forgot ? { display: "block" } : { display: "none" }}
      >
        <NavLink to="/forgotPassword">Forgot Password?</NavLink>
      </div>
      <button type="submit" disabled={loading} id="submit">
        {loading ? (
          <div className="authloading">
            <div className="authloader"></div>
          </div>
        ) : (
          `${auth}`
        )}
      </button>
      <h2>Or Sign In With</h2>
    </div>
  );
};

export default EmailPassword;
