import "./Home.css";
import Header from "./Header";
import Footer from "./Footer";

const Portfolio = ({ info }) => {
  return (
    <>
      <Header />
      <main id="main">
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Portfoio Details</h2>
              <ol>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Portfolio Details</li>
              </ol>
            </div>
          </div>
        </section>

        <section id="portfolio-details" className="portfolio-details">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="portfolio-details-slider swiper">
                  <div className="swiper-wrapper align-items-center">
                    <div className="swiper-slide">
                      <img src={info.Image1} alt="" />
                    </div>

                    <div className="swiper-slide">
                      <img src={info.Image2} alt="" />
                    </div>

                    <div className="swiper-slide">
                      <img src={info.Image3} alt="" />
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>Project information</h3>
                  <ul>
                    <li>
                      <strong>Category</strong>: {info.Category}
                    </li>
                    <li>
                      <strong>Client</strong>: {info.Client}
                    </li>
                    <li>
                      <strong>Project date</strong>: {info.Date}
                    </li>
                    <li>
                      <strong>Project URL</strong>:{" "}
                      <a href={info.Category}>{info.Link}</a>
                    </li>
                  </ul>
                </div>
                <div className="portfolio-description">
                  <h2>{info.Name}</h2>
                  <p>{info.Description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
