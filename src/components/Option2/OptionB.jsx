import { Link } from "react-router-dom";

import bannerOptionTwo from "../../assets/imageD.webp";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpeg";
import image3 from "../../assets/image3.jpeg";
import image4 from "../../assets/image4.jpeg";
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";

import "../../styles/optionB.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const OptionB = () => {
  return (
    <>
      {/* Primer segmento */}
      <div>
        <img
          className="img-banner-B"
          src={bannerOptionTwo}
          alt="Banner de la opcion dos"
        />
        <div className="container">
          <h1 className="title-B">
            Innovación y sostenibilidad para un futuro mejor
          </h1>
          <div className="btn btn-empieza">
            <Link className="link-btn me-2" to="*">
              Empieza ahora
            </Link>
            <i className="bi bi-arrow-bar-right"></i>
          </div>
        </div>
      </div>
      {/* Segundo segmento */}
      <div className="bg-black text-white">
        <h2 className="title-herramientas py-5">Nuestras herramientas</h2>
        <div className="container gallery-container py-2">
          <div className="gallery-item">
            <img
              className="img-gallery"
              src={image1}
              alt="Descripción de la imagen 1"
            />
            <p className="index-text">Imagen 1</p>
          </div>
          <div className="gallery-item">
            <img
              className="img-gallery"
              src={image2}
              alt="Descripción de la imagen 2"
            />
            <p className="index-text">Imagen 2</p>
          </div>
          <div className="gallery-item">
            <img
              className="img-gallery"
              src={image3}
              alt="Descripción de la imagen 3"
            />
            <p className="index-text">Imagen 3</p>
          </div>
          <div className="gallery-item">
            <img
              className="img-gallery"
              src={image4}
              alt="Descripción de la imagen 4"
            />
            <p className="index-text">Imagen 4</p>
          </div>
          <div className="gallery-item">
            <img
              className="img-gallery"
              src={image5}
              alt="Descripción de la imagen 5"
            />
            <p className="index-text">Imagen 5</p>
          </div>
          <div className="gallery-item">
            <img
              className="img-gallery"
              src={image6}
              alt="Descripción de la imagen 6"
            />
            <p className="index-text">Imagen 6</p>
          </div>
        </div>
      </div>
      {/* Tercer segmento */}
      <div className="container-fluid py-5 mt-5 mb-5">
        <div className="d-flex flex-row gap-5">
          <h3 className="title-mision">Nuestra misión</h3>
          <p className="text-mision">
            Garantizar que la empresa cuente con un asesor energético para
            cualquier ámbito relacionado, estableciendo una comunicación
            directa. Nuestro objetivo es que la empresa nos vea como un socio
            más, enfocado en minimizar al máximo sus costos de suministros en
            ser más eficiente y sostenible, aprovechando al máximo las energías
            renovables. Actuar con honestidad y construir relaciones de
            confianza a largo plazo con las empresas con las que colaboramos.
            Superar las expectativas y ser accesible, además de ofrecer un
            servicio de calidad. Trabajar juntos para facilitar el día a día de
            las personas con las que colaboramos.
          </p>
        </div>
      </div>
    </>
  );
};
export default OptionB;
