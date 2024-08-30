import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/logo-n.png";

import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <navbar className="navbar navbar-expand-lg">
        <div className="container gap-4 ms-5 fs-5">
          <Link to="/">
            <img
              src={logo}
              alt="Logo compañía N"
              className="mx-auto d-block"
              style={{ width: "100px", height: "auto" }}
            />
          </Link>
          <div className="collapse navbar-collapse" id="navbarDesktop">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active text-navbar" aria-current="page" to='*'>
                  Nuestros servicios
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-navbar" to='*'>
                  Tecnologías
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-navbar" to='*'>
                  Contacto
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-navbar" to='/opcion-B'>
                  Opción 2
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </navbar>
    </>
  );
};
export default Navbar;
