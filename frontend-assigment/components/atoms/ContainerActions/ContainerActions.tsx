import { FC } from "react";

type Props = {};

const ContainerActions: FC<Props> = ({}) => {
  return (
    <div className="row containerActions">
      <div className="col">
        <i className="bi bi-star" />
        Destacar
      </div>
      <div className="col">
        <i className="bi bi-chat-left" />
        Comentar
      </div>
      <div className="col">
        <i className="bi bi-arrow-up-right" />
        Compartir
      </div>
    </div>
  );
};

export default ContainerActions;
