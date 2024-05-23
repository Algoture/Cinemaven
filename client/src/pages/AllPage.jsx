import { Nav, MainCarousel } from "../Index";

const AllPage = () => {
  return (
    <>
      <Nav />
      <div>
        <MainCarousel start={0} end={10} heading={"Popular Now"} />
        <MainCarousel start={10} end={20} heading={"Latest Releases"} />
        <MainCarousel start={20} end={30} heading={"Trending"} />
        <MainCarousel start={10} end={20} heading={"Top Rated On IMDB"} />
      </div>
    </>
  );
};

export default AllPage;
