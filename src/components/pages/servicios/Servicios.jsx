import { Footer } from "../../common/footer/Footer";
import img1 from "../../../assets/img/img1.webp";
import img2 from "../../../assets/img/img2.webp"
import img3 from "../../../assets/img/img3.webp"
import { Header } from "../../common/header/Header";
import "./Servicios.css";

export const Servicios = () => {
  return (
    <>
      <Header />
      <div className="image-servicio">
        <div></div>
        <div className="container">
          <h1>Nuestros servicios</h1>
        </div>
      </div>
      <div className="page-servicios">
        <nav>
          <ul className="d-flex align-items-center justify-content-center p-1">
            <li>
              <a
                className="active subnav"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                aria-current="true"
                aria-label="Slide 1"
              >
                Clima Laboral
              </a>
            </li>
            <li>
              <a
                className="subnav"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              >
                Autoliderazgo
              </a>
            </li>
            <li>
              <a
                className="subnav"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              >
                Consultoria
              </a>
            </li>
          </ul>
        </nav>
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner vista-servicio w-100">
            <div
              className="primer-serv carousel-item active"
              data-bs-interval="10000"
            >
              <div className=" carousel-caption d-none d-md-block">
                <img src={img1} alt="" />
                <h5 className="">¿Como mejorar el clima laboral?</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Odio, voluptatibus id, necessitatibus at earum aperiam cumque,
                  laudantium voluptatum fugit asperiores pariatur ipsa itaque?
                  Fugiat possimus exercitationem iusto optio dolore doloribus.
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <div className="carousel-caption d-none d-md-block">
                <img src={img2} alt="" />
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-caption d-none d-md-block">
                <img src={img3} alt="" />
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
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
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
