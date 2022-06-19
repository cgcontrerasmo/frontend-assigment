import { FC } from "react";

type Props = {};

const MenuHome: FC<Props> = () => {
  return (
    <div className="col d-flex">
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
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a className="dropdown-item" href=".">
                Perfil
              </a>
            </li>
            <li>
              <a className="dropdown-item" href=".">
                Tienda
              </a>
            </li>
            <li>
              <a className="dropdown-item" href=".">
                Documentales
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default MenuHome;
