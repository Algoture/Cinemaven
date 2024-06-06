import "../css/Components.scss";
const OAuth = ({ handleGoogleSignIn, handleFBSignIn, handleGitHubSignIn }) => {
  return (
    <div id="oAuth">
      <div className="google" onClick={handleGoogleSignIn}>
        <img src="google.png" alt="Google Icon" />
        Continue With Google
      </div>
      <div className="facebook" onClick={handleFBSignIn}>
        <img src="facebook.png" alt="Facebook Icon" />
        Continue With Facebook
      </div>
      <div className="github" onClick={handleGitHubSignIn}>
        <img src="github.png" alt="GitHub Icon" />
        Continue With GitHub
      </div>
    </div>
  );
};

export default OAuth;
