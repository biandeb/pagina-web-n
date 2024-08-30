import errorRayo from '../assets/rayo-negro.png'

import "../styles/informativePages.css";


const Error = () => {
    return (
        <div className="all-error gap-5">
          <img
            className="img-error"
            src={errorRayo}
            alt="Foto para página error"
          />
          <div className="error-container">
            <p className="title-error">ERROR 404</p>
            <p className="info-error fs-3">
              No se ha encontrado la página solicitada.
            </p>
          </div>
        </div>
      );
}
export default Error