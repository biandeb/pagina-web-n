import "../../styles/HomeDesktop.css";

import imageA from "../../assets/imageA.webp";
import imageB from "../../assets/imageB.webp";
import imageC from "../../assets/imageC.webp";

const HomeDesktop = () => {
  return (
    <>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <p className="texto-principal">Asesoría energética</p>
    <div className="carousel-item active">
      <img src={imageA} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={imageB} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={imageC} className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
    </>
  );
};
export default HomeDesktop;
