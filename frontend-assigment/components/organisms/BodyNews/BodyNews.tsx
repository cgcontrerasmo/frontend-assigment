import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { getBodyNew } from "../../../services/newsServices";
import Chip from "../../atoms/Chip/Chip";
import ContainerActions from "../../atoms/ContainerActions/ContainerActions";
//import {data} from "../../../services/article.json";

type Props = {};

const BodyNews: FC<Props> = ({}) => {
  const [data, setData] = useState("");

  useEffect(() => {
    getBodyNew().then((res) => {
      setData(res.data[0].content);
    });
  });

  return (
    <div className="container-fluid bodyNews py-5">
      <div className="row">
        <img
          src="./images/principalImage.png"
          width="100%"
          height="100%"
          alt="principalImage"
        />
      </div>
      <div className="row align-items-center my-4">
        <div className="col-7">
          <h4>Lorem ipsum dolor: Volutpat consequat</h4>
        </div>
        <div className="col-2">
          <button className="buttonSave">Guardar</button>
        </div>
      </div>
      <div className="row px-0">
        <div className="col-2 px-0 justify-content-center d-flex">
          <img
            src="/images/newImages.png"
            width="70%"
            height="100%"
            alt="imageDecoration"
          />
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <b className="my-0">Noticias DocRed</b>
            </div>
          </div>
          <div className="row">
            <p className="info">
              Hace 12h | Publicado: 17/01/18 | Lectura: 3min
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="row">
            <Chip message="Medicina interna" />
            <Chip message="Pediatría" />
            <Chip message="Obstecticia" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div
            dangerouslySetInnerHTML={{ __html: data.split("</a>")[1] }}
            className="description"
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <ContainerActions />
      </div>
    </div>
  );
};

export default BodyNews;
