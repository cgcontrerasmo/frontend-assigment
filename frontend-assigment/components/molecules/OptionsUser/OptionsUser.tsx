import Image from "next/image";
import { FC } from "react";

type Props = {};

const OptionsUser: FC<Props> = () => {
  return (
    <div className="container-fluid containerInfoUser">
      <div className="row align-items-center">
        <div className="col d-flex justify-content-center">
          <button className="button">
            <i className="bi bi-bell" />
          </button>
        </div>
        <div className="col">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="home"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Image
                  className="userImage"
                  src="/images/user.jpg"
                  width="45%"
                  height="45%"
                />
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href=".">
                    Perfil
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href=".">
                    Cerrar sesión
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="col d-flex justify-content-center">
          <button className="button">
            <i className="bi bi-gear" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OptionsUser;
