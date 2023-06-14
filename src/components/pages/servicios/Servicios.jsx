import { Footer } from "../../common/footer/Footer";
import img1 from "../../../assets/img/img1.webp";
import img2 from "../../../assets/img/img2.webp";
import img3 from "../../../assets/img/img3.webp";
import { Header } from "../../common/header/Header";
import "./Servicios.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const Servicios = () => {
  const carouselActive= useSelector((store) => store.serviceSlice.value);
  
  useEffect(() => {
    const listItem = document.querySelectorAll("#subnav-serv nav ul li a");
    const backdrop = document.querySelector("#menu-backdrop");
    listItem.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const { left, top, width, height } = item.getBoundingClientRect();

        backdrop.style.setProperty("--left", `${left}px`);
        backdrop.style.setProperty("--top", `${top - top + 5}px`);
        backdrop.style.setProperty("--width", `${width}px`);
        backdrop.style.setProperty("--height", `${height}px`);

        backdrop.style.opacity = "1";
        backdrop.style.visibility = "visible";
      });

      item.addEventListener("mouseleave", () => {
        backdrop.style.opacity = "0";
        backdrop.style.visibility = "hidden";
      });
    });
  }, []);
  const scrollMove = () => {
    window.scrollTo({
      top: 450,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Header />
      <div className="image-servicio">
        <div></div>
        <div className="container" data-aos="fade-up">
          <h1>Nuestros servicios</h1>
        </div>
      </div>
      <div className="page-servicios">
        <header id="subnav-serv">
          <nav>
            <ul className="d-flex align-items-center justify-content-center p-1">
              <li className="">
                <a
                  className="active subnav"
                  onClick={() => scrollMove()}
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  aria-current="true"
                  aria-label="Slide 1"
                >
                  Clima Laboral
                </a>
              </li>
              <li className="">
                <a
                  className="subnav"
                  onClick={() => scrollMove()}
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                >
                  Autoliderazgo
                </a>
              </li>
              <li className="">
                <a
                  className="subnav"
                  onClick={() => scrollMove()}
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                >
                  Consultoria
                </a>
              </li>
            </ul>
          </nav>
          <div id="menu-backdrop"></div>
        </header>
        <div
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
          data-aos="zoom-in-up"
        >
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
              className={`carousel-item ${carouselActive == 1 ? "active" : ""}`} 
              data-bs-interval="10000"
            >
              <div className="h-100 d-flex align-items-center container">
                <div className="  container-serv">
                  <div className="col-12 col-md-8 d-flex align-items-center justify-content-center">
                    <h3 className="">¿Como mejorar el clima laboral?</h3>
                  </div>
                  <picture className="col-12 col-md-5">
                    <img src={img1} alt="" />
                  </picture>
                  <div className="col-12 col-md-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Odio, voluptatibus id, necessitatibus at earum aperiam
                      cumque, laudantium voluptatum fugit asperiores pariatur
                      ipsa itaque? Fugiat possimus exercitationem iusto optio
                      dolore doloribus.
                    </p>
                  </div>
                  <div className="col-12 col-md-8">
                    <h6>Subtitulo</h6>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Exercitationem inventore fuga soluta alias ad ea.
                      Aspernatur repellendus ipsa aliquid adipisci blanditiis
                      mollitia voluptatem unde quae magni fugit hic, libero
                      similique.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`carousel-item ${carouselActive == 2 ? "active" : ""}`} 
              data-bs-interval="2000"
            >
              <div className="h-100 d-flex align-items-center container">
                <div className=" container-serv ">
                  <div className="col-12 col-md-8 d-flex align-items-center justify-content-center">
                    <h3>Autoliderazgo</h3>
                  </div>
                  <picture className="col-12 col-md-5">
                    <img src={img2} alt="" />
                  </picture>
                  <div className="col-12 col-md-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid temporibus quod aliquam consequuntur, sapiente
                      odit vitae asperiores molestias tempora animi culpa, esse
                      incidunt distinctio numquam veniam itaque dolorum.
                      Nostrum, vero.
                    </p>
                  </div>
                  <div className="col-12 col-md-8">
                    <h6>Subtitulo</h6>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Exercitationem inventore fuga soluta alias ad ea.
                      Aspernatur repellendus ipsa aliquid adipisci blanditiis
                      mollitia voluptatem unde quae magni fugit hic, libero
                      similique.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`carousel-item ${carouselActive == 3 ? "active" : ""}`} 
            >
              <div className="h-100 d-flex align-items-center container">
                <div className="container-serv ">
                  <div className="col-12 col-md-8 d-flex align-items-center justify-content-center">
                    <h3>Consultoria de Recursos Humanos</h3>
                  </div>
                  <picture className="col-12 col-md-5">
                    <img src={img3} alt="" />
                  </picture>
                  <div className="col-12 col-md-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem magni nihil vitae excepturi maiores explicabo,
                      itaque officiis voluptatum esse illo temporibus in minus
                      expedita aspernatur tempore beatae modi cumque. Sint!
                    </p>
                  </div>
                  <div className="col-12 col-md-8">
                    <h6>Subtitulo</h6>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Exercitationem inventore fuga soluta alias ad ea.
                      Aspernatur repellendus ipsa aliquid adipisci blanditiis
                      mollitia voluptatem unde quae magni fugit hic, libero
                      similique.
                    </p>
                  </div>
                </div>
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
