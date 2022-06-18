import type { NextPage } from "next";
import { useEffect, useState, useSyncExternalStore } from "react";
import Footer from "../components/molecules/Footer/Footer";
import Header from "../components/molecules/Header/Header";
import NewCard from "../components/molecules/NewCard/NewCard";
import BodyNews from "../components/organisms/BodyNews/BodyNews";
import { getNews } from "../services/newsServices";
import styles from "../styles/Home.module.scss";
import { New } from "../models/new";

const Home: NextPage = () => {
  const [news, setNews] = useState([] as New[]);

  const setterNews = (news: New[]): void => {
    setNews(news);
  };

  useEffect(() => {
    getNews().then((res) => {
      setterNews(res.data.articles);
    });
  }, []);

  useEffect(() => {
    let aux = "";
    news.forEach((el) => {
      aux += "'" + el.clean_url + "',";
    });
    console.log(aux);
  }, [news]);

  useEffect(() => {
    console.log(news);
  }, [news]);

  return (
    <div className="containerIndex">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <BodyNews />
          </div>
          <div className="col-4">
            {news.length > 0 &&
              news.map((el, index) => {
                return <NewCard new={el} key={index} />;
              })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
