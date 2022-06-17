import type { NextPage } from "next";
import Footer from "../components/molecules/Footer/Footer";
import Header from "../components/molecules/Header/Header";
import NewCard from "../components/molecules/NewCard/NewCard";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <NewCard />
      </div>
      <Footer />
    </>
  );
};

export default Home;
