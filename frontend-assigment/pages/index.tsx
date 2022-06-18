import type { NextPage } from "next";
import Footer from "../components/molecules/Footer/Footer";
import Header from "../components/molecules/Header/Header";
import NewCard from "../components/molecules/NewCard/NewCard";
import BodyNews from "../components/organisms/BodyNews/BodyNews";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <NewCard />
      </div>
      <BodyNews />
      <Footer />
    </>
  );
};

export default Home;
