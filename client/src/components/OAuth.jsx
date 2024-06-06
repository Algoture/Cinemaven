import "../css/Components.scss";
const OAuth = ({ google, fb, github }) => {
  return (
    <div id="oAuth">
      <div className="google" onClick={google}>
        <img src="google.png" alt="Google Icon" />
        Continue With Google
      </div>
      <div className="facebook" onClick={fb}>
        <img src="facebook.png" alt="Facebook Icon" />
        Continue With Facebook
      </div>
      <div className="github" onClick={github}>
        <img src="github.png" alt="GitHub Icon" />
        Continue With GitHub
      </div>
    </div>
  );
};

export default OAuth;
