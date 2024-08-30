
import bannerMobile from '../../assets/bannerMobile.png'
import '../../styles/homeMobile.css'

const HomeMobile = () => {
    return (
        <section className="background-photo" id="home-mobile">
          <div className="container">
            <img
              src={bannerMobile}
              alt="Banner de la empresa para mobile responsive"
              className="banner-mobile"
            />
          </div>
        </section>
  );
}
export default HomeMobile