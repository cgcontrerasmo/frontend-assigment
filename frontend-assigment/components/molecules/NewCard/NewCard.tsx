import { FC, useEffect } from "react";
import { getNews } from "../../../services/newsServices";
type Props = {};

const NewCard: FC<Props> = ({}) => {
  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="card newCard">
      <div className="container">
        <div className="col-6"></div>
        <div className="col-6">
          <div className="row">
            <h1>Lorem ipsum dolor: volutpat consequat</h1>
          </div>
          <div className="row">
            <p>Por: lorem Ipsum Dolor</p>
          </div>
          <hr />
          <div className="row">
            <div className="col-4">Favoritos</div>
            <div className="col-4">Comentarios</div>
            <div className="col-4">views</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
