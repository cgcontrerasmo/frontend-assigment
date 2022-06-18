import { FC } from "react";

type Props = {};

const ContainerActions: FC<Props> = ({}) => {
  return (
    <div className="row containerActions">
      <div className="col d-flex justify-content-center me-4">
        <i className="bi bi-star" />
        Destacar
      </div>
      <div className="col d-flex justify-content-center mx-4">
        <i className="bi bi-chat-left" />
        Comentar
      </div>
      <div className="col d-flex justify-content-end ms-4">
        <i className="bi bi-arrow-up-right" />
        Compartir
      </div>
    </div>
  );
};

export default ContainerActions;
