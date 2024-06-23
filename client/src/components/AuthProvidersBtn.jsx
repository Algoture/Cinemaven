import "../css/Components.scss";
const AuthProvidersBtn = ({
  authProviderClassName,
  auth,
  authProviderImg,
  authTitle,
  authProviderName,
}) => {
  return (
    <div className={authProviderClassName} onClick={auth}>
      <img src={authProviderImg} alt={authTitle} />
      Continue With {authProviderName}
    </div>
  );
};

export default AuthProvidersBtn;
