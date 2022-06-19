import Image from "next/image";
import { FC } from "react";
import Search from "../../atoms/Search/Search";

type Props = {};

const Header: FC<Props> = ({}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-light py-0">
      <div className="container-fluid">
        <div className="col-2 d-flex justify-content-center">
          <Image
            src="/images/logo-docred-color.svg"
            alt="logoDocRed"
            width="100%"
            height="100%"
          />
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-5">
              <Search />
            </div>
            <div className="col-2">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <button className="button">
                  <i className="bi bi-house-door" />
                </button>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Inicio
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Perfil
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Tienda
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Documentales
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 containerInfoUser">
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
                    href="#"
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
                      <a className="dropdown-item" href="#">
                        Perfil
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
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
      </div>
    </nav>
  );
};

export default Header;
