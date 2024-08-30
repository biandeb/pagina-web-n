import queHacemos from "../../../assets/imageD.webp";

import "../../../styles/informativePages.css";

const QueHacemos = () => {
  return (
    <div className="all">
      <div className="text-container container container-principal">
        <p className="title">¿QUÉ HACEMOS?</p>
        <p className="info-text fs-2">
          En N nos dedicamos a ofrecer a nuestros clientes un ahorro eficiente
          en sus suministros. Nuestro objetivo es sencillo: proveer a las
          empresas con un asesor energético integral que maximice todas sus
          necesidades.
        </p>
      </div>
      <img
        className="img-que-hacemos"
        src={queHacemos}
        alt="Foto informativa sobre que hace la empresa"
      />
    </div>
  );
};
export default QueHacemos;
