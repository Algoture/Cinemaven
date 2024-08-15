import { Nav, MainCarousel } from "../Index";
import "../css/Pages.scss";
const AllPage = () => {
  return (
    <>
      <Nav />
      <div className="allPage">
        <div className="allPageTitle">
          <p>
            Enjoy All Your Favourite Movies, Shows at <span>Cinemaven</span>{" "}
          </p>
        </div>
        <MainCarousel start={40} end={50} heading={"Popular Now"} />
        <MainCarousel start={30} end={40} heading={"Latest Releases"} />
      </div>
    </>
  );
};

export default AllPage;
