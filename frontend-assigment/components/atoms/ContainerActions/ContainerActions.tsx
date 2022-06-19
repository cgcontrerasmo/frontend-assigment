import { FC } from "react";

type Props = {};

const ContainerActions: FC<Props> = ({}) => {
  return (
    <div className="row containerActions">
      <div className="col-12 col-sm-4 d-flex justify-content-center">
        <button className="d-flex button">
          <i className="bi bi-star" />
          Destacar
        </button>
      </div>
      <div className="col-12 col-sm-4 d-flex justify-content-center">
        <button className="d-flex button">
          <i className="bi bi-chat-left" />
          Comentar
        </button>
      </div>
      <div className="col-12 col-sm-4 d-flex justify-content-center">
        <button className="d-flex button">
          <i className="bi bi-arrow-up-right" />
          Compartir
        </button>
      </div>
    </div>
  );
};

export default ContainerActions;
