import "../css/Components.scss";
const BackButton = () => {
  return (
    <button onClick={() => history.back()} id="backbtn">
      Back
    </button>
  );
};

export default BackButton;
