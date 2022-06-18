import Image from "next/image";
import { FC } from "react";

type Props = {};

const Footer: FC<Props> = ({}) => {
  return (
    <div className="container-fluid containerFooter">
      <div className="row">
        <div className="col-2 d-flex justify-content-center align-items-center">
          <Image
            src="/images/logo-docred-color.svg"
            alt="logoDocRed"
            width="100%"
            height="100%"
          />
        </div>
        <div className="col-2 d-flex justify-content-center align-items-center">
          <a href="#">Preguntas frecuentes</a>
        </div>
        <div className="col-2 d-flex justify-content-center align-items-center">
          <a href="#">Contáctanos</a>
        </div>
        <div className="col-2 d-flex justify-content-center align-items-center">
          <a href="#">Información</a>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <p>DocRed © 2019. todos los derechos reservados</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
