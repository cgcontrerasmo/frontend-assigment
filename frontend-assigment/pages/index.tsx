import type { NextPage } from "next";
import Footer from "../components/molecules/Footer/Footer";
import Header from "../components/molecules/Header/Header";
import BodyNews from "../components/organisms/BodyNews/BodyNews";
import ContainerNewCars from "../components/organisms/ContanerNewCards/ContainerNewCards";

const Home: NextPage = () => {
  return (
    <div className="containerIndex">
      <Header />
      <div className="container-fluid my-5 px-5">
        <div className="row">
          <div className="col-12 col-xl-8">
            <BodyNews />
          </div>
          <div className="col-12 col-xl-4">
            <ContainerNewCars />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
