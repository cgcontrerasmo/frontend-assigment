import { FC, useEffect, useState } from "react";
import { New } from "../../../models/new";
import { getNews } from "../../../services/newsServices";
import NewCard from "../../molecules/NewCard/NewCard";
type Props = {};
const ContainerNewCars: FC<Props> = (props) => {
  const [news, setNews] = useState([] as New[]);

  const setterNews = (news: New[]): void => {
    setNews(news);
  };

  useEffect(() => {
    getNews().then((res) => {
      setterNews(res.data.articles);
    });
  }, []);

  return (
    <div className="container containerNewCards">
      <div className="row">
        <div className="col">
          <p>Noticias relacionadas</p>
        </div>
        <div className="col">
          <hr />
        </div>
      </div>
      <div className="row newCards">
        <div className="col">
          {news.length > 0 &&
            news.map((el, index) => {
              return <NewCard new={el} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default ContainerNewCars;
