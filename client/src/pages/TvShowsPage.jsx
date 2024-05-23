import { Nav, MainCarousel } from "../Index";

const TvShowsPage = () => {
  return (
    <>
      <Nav />
      <div>
        <MainCarousel start={0} end={10} heading={"Popular TV Shows"} />
        <MainCarousel start={10} end={20} heading={"Top Shows"} />
      </div>
    </>
  );
};

export default TvShowsPage;
