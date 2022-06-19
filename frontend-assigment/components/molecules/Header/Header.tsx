import Image from "next/image";
import { FC } from "react";
import MenuHome from "../../atoms/MenuHome/MenuHome";
import Search from "../../atoms/Search/Search";
import OptionsUser from "../OptionsUser/OptionsUser";

type Props = {};

const Header: FC<Props> = ({}) => {
  return (
    <nav className="navbar navbar-expand-lg py-0">
      <div className="col-4 col-lg-2 d-flex justify-content-center">
        <Image
          src="/images/logo-docred-color.svg"
          alt="logoDocRed"
          width="100%"
          height="100%"
        />
      </div>
      <div className="col-6 col-lg-4">
        <Search />
      </div>
      <div className="col-2 col-lg-6">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="col-9">
            <MenuHome />
          </div>
          <div className="col-3">
            <OptionsUser />
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    </nav>
  );
};

export default Header;
