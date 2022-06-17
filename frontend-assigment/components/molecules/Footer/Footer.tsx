import Image from "next/image";
import { FC } from "react";

type Props = {};

const Footer: FC<Props> = ({}) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 d-flex justify-content-center align-items-center">
          <Image
            src="/images/logoDocRed.png"
            alt="logoDocRed"
            width="100%"
            height="100%"
          />
        </div>
        <div className="col-2 d-flex justify-content-center align-items-center">
          <a>Preguntas frecuentes</a>
        </div>
        <div className="col-2 d-flex justify-content-center align-items-center">
          <a>Contáctanos</a>
        </div>
        <div className="col-2 d-flex justify-content-center align-items-center">
          <a>Información</a>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <p>DocRed 2019. todos los derechos reservados</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
