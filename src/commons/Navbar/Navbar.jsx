import "./navbar.css";

import logo from '../../assets/logo-n.png';

const Navbar = () => {
  return (
    <>
      <header className="header navbar navbar-expand-lg">
        <div className="container-fluid gap-4 ms-5 fs-5">
          <img
            src={logo}
            alt="Logo compañía N"
            className="mx-auto d-block"
            style={{ width: "100px", height: "auto" }}
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarDesktop"
            aria-controls="navbarDesktop"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarDesktop">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  ¿Qué hacemos?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Nuestra misión
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Nuestros servicios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;
