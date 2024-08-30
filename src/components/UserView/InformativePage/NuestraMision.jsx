import nuestraMision from "../../../assets/imageB.webp";

import "../../../styles/informativePages.css";

const NuestraMision = () => {
  return (
    <div className="all">
      <div className="text-container container container-principal">
        <p className="title">NUESTRA MISIÓN</p>
        <p className="info-text fs-4">
          Garantizar que la empresa cuente con un asesor energético para
          cualquier ámbito relacionado, estableciendo una comunicación directa.
          Nuestro objetivo es que la empresa nos vea como un socio más, enfocado
          en minimizar al máximo sus costos de suministros y en ser más
          eficiente y sostenible, aprovechando al máximo las energías
          renovables.
        </p>
        <p className="info-text fs-4">
        Actuar con honestidad y construir relaciones de confianza
          a largo plazo con las empresas con las que colaboramos. Superar las
          expectativas y ser accesible, además de ofrecer un servicio de
          calidad. Trabajar juntos para facilitar el día a día de las personas
          con las que colaboramos.
        </p>
      </div>
      <img
        className="img-mision"
        src={nuestraMision}
        alt="Foto informativa sobre la misión de la empresa"
      />
    </div>
  );
};
export default NuestraMision;
