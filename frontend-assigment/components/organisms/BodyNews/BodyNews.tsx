import Image from "next/image";
import { FC } from "react";
import Chip from "../../atoms/Chip/Chip";
import ContainerActions from "../../atoms/ContainerActions/ContainerActions";

type Props = {};

const BodyNews: FC<Props> = ({}) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Image
          src="/images/logoDocRed.png"
          alt="logoDocRed"
          width="100%"
          height="100%"
        />
        <Chip message="Medicina interna" />
        <ContainerActions />
      </div>
    </div>
  );
};

export default BodyNews;
