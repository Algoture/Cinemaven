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
  submit,
  name,
  setName,
}) => {
  return (
    <div id="emailPassword">
      <form className="AuthForm" onSubmit={submit}>
        <input
          type="text"
          name="username"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus={!forgot}
          required={!forgot}
          style={forgot ? { display: "none" } : { display: "block" }}
        />
        <div className="email">
          <img src="email.png" alt="" />
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            required
            value="binef99481@obisims.com"
            autoComplete="on"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password">
          <img className="passwordimg" src="password.png" alt="" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            name="password"
            value="H3110@1234"
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
      </form>
    </div>
  );
};

export default EmailPassword;
