import { AuthProvidersBtn, BackButton } from "../Index";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import useAuthHandlers from "../utils/OAuths";
import "../css/Pages.scss";

const AllAuthPage = () => {
  const navigate = useNavigate();
  const { googleSignIn, fBSignIn, gitHubSignIn } = useAuthHandlers();

  return (
    <>
      <div className="loginPage">
        <BackButton />
        <div className="loginCard">
          <p>Welcome Back!</p>
          <form className="AuthForm">
            <AuthProvidersBtn
              authTitle="email"
              auth={() => navigate("/emailauth")}
              authProviderName="Email"
              authProviderImg="email.png"
              authProviderClassName="email"
            />
            <AuthProvidersBtn
              authTitle="google"
              auth={googleSignIn}
              authProviderName="Google"
              authProviderImg="google.png"
              authProviderClassName="google"
            />
            <AuthProvidersBtn
              authTitle="github"
              auth={gitHubSignIn}
              authProviderName="Github"
              authProviderImg="github.png"
              authProviderClassName="github"
            />
            <AuthProvidersBtn
              authTitle="fb"
              auth={fBSignIn}
              authProviderName="Facebook"
              authProviderImg="facebook.png"
              authProviderClassName="facebook"
            />
          </form>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default AllAuthPage;
