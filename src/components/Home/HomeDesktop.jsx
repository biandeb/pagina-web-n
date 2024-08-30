import "../../styles/homeDesktop.css";

import imageA from "../../assets/imageA.webp";
import imageB from "../../assets/imageB.webp";
import imageC from "../../assets/imageC.webp";

const HomeDesktop = () => {
  return (
    <>
      <div
        id="carouselHomeView"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <p className="texto-principal mt-5">Auditoría energética industrial</p>
            <p className="texto-secundario mt-4">
            Optimiza tu energía, maximiza tu ahorro.
            </p>
            <img
              src={imageA}
              className="img-only d-block w-100"
              alt="Imagen A del carousel"
            />
          </div>
          <div className="carousel-item">
            <p className="texto-principal">¿Qué hacemos?</p>
            <p className="texto-secundario mt-5">
            En N nos dedicamos a ofrecer a nuestros clientes un ahorro eficiente
            en sus suministros. Nuestro objetivo es sencillo: proveer a las
            empresas con un asesor energético integral que maximice todas sus
            necesidades.
            </p>
            
            <img
              src={imageC}
              className="img-only d-block w-100"
              alt="Imagen B del carousel"
            />
          </div>
          <div className="carousel-item">
            <p className="texto-principal">Nuestra misión</p>
            <p className="texto-mision">
              Garantizar que la empresa cuente con un asesor energético para
              cualquier ámbito relacionado, estableciendo una comunicación
              directa. Nuestro objetivo es que la empresa nos vea como un socio
              más, enfocado en minimizar al máximo sus costos de suministros en
              ser más eficiente y sostenible, aprovechando al máximo las
              energías renovables. Actuar con honestidad y construir relaciones
              de confianza a largo plazo con las empresas con las que
              colaboramos. Superar las expectativas y ser accesible, además de
              ofrecer un servicio de calidad. Trabajar juntos para facilitar el
              día a día de las personas con las que colaboramos.
            </p>
            <img
              src={imageB}
              className="img-only d-block w-100"
              alt="Imagen C del carousel"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselHomeView"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselHomeView"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};
export default HomeDesktop;
