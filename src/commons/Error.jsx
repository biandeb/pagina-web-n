import errorRayo from '../assets/rayo-negro.png'

import "../styles/informativePages.css";

import { useNavigate } from 'react-router-dom';


const Error = () => {
        const navigate = useNavigate();
      
        const handleGoBack = () => {
          navigate(-1);
        };

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
            <button className='btn btn-volver' onClick={handleGoBack}>
            Volver</button>
          </div>
        </div>
      );
}

export default Error