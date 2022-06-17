import Image from "next/image";
import { FC } from "react";

type Props = {};

const Header: FC<Props> = ({}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <div className="col-3 d-flex justify-content-center">
          <Image
            src="/images/logoDocRed.png"
            alt="logoDocRed"
            width="100%"
            height="100%"
          />
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-8">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
            <div className="col-4">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <i className="bi bi-house-door" />
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
        <div className="col-3">
          <div className="row align-items-center">
            <div className="col d-flex justify-content-center">
              <i className="bi bi-bell" />
            </div>
            <div className="col d-flex justify-content-center">
              <i className="bi bi-gear" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
