import { Footer } from "../../common/footer/Footer";
import img1 from "../../../assets/img/img1.webp";
import img2 from "../../../assets/img/img2.webp";
import img3 from "../../../assets/img/img3.webp";
import { Header } from "../../common/header/Header";
import "./Servicios.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const Servicios = () => {
  const carouselActive = useSelector((store) => store.serviceSlice.value);

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
            <ul className="d-flex align-items-center justify-content-center p-1 gap-2 d-none d-sm-flex">
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
                  Descubre tu potencial
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
            <ul className="d-flex align-items-center justify-content-center p-1 d-sm-none">
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
                  Descubre tu potencial
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
                  <picture className="col-12 col-md-4">
                    <img src={img1} alt="" />
                  </picture>
                  <div className="col-12 col-md-6 descripcion">
                    <p className="des-ns consultoria">
                      ¿Sentís que el clima en la organización está afectando el
                      logro de los objetivos? ¡Tenemos la solución que
                      necesitan! En Ascendere, no solo transformamos el clima
                      organizacional, ¡sino que lo llevamos a un nivel
                      excepcional! <br /> Imagina un ambiente de trabajo que sea
                      verdaderamente inspirador, colaborativo y de alto
                      rendimiento. Ahí es donde entra en juego nuestra
                      experiencia de más de 15 años de liderazgo en grandes
                      compañías, para potenciar la motivación, productividad y
                      bienestar de la organización. <br /> No permitas que un
                      clima laboral inadecuado sea un obstáculo para el éxito.
                      ¡Déjanos llevar a tu organización a nuevos niveles de
                      excelencia! Los objetivos de tu organización o equipo,
                      están más cerca de lo que pensas.
                    </p>
                    <div className="link">
                      <Link to={"/contact"}>
                        <Button variant="contained">Contactanos</Button>
                      </Link>
                    </div>
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
                  <picture className="col-12 col-md-5">
                    <img src={img2} alt="" />
                  </picture>
                  <div className="col-12 col-md-6 descripcion">
                    <p className="des-ns consultoria">
                      Ascendere DTP se basa en la reconocida escala de los 5
                      Grandes Aspectos de la personalidad para brindarte una
                      evaluación completa de quién eres. <br /> Nuestra
                      herramienta te permite explorar y comprender en
                      profundidad tus rasgos de personalidad, revelando tus
                      fortalezas únicas y ofreciéndote estrategias efectivas
                      para mitigar los aspectos negativos que podrían
                      obstaculizar tus metas. Con Ascendere DTP, obtendrás una
                      visión clara de tu personalidad y cómo influye en tus
                      elecciones y resultados. Te ayudaremos a aprovechar al
                      máximo tus puntos fuertes y a superar cualquier obstáculo
                      que se interponga en tu camino hacia el éxito. Juntos,
                      exploraremos el potencial que yace en tu propia
                      personalidad para que puedas avanzar con confianza hacia
                      tus objetivos.
                    </p>
                    <div className="link">
                      <a href="https://api.whatsapp.com/send?phone=5491136827200&text=">
                        <Button variant="contained">Contactanos</Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`carousel-item ${carouselActive == 3 ? "active" : ""}`}
            >
              <div className="h-100 d-flex align-items-center container">
                <div className="container-serv ">
                  <picture className="col-12 col-md-5">
                    <img src={img3} alt="" />
                  </picture>
                  <div className="col-12 col-md-6 descripcion">
                    <p className="des-ns consultoria">
                      ¿Has considerado cómo tu organización puede alcanzar su
                      máximo potencial? Nuestra consultoría en Recursos Humanos
                      se enfoca en tres beneficios clave:
                      <ul>
                        <li className="rr-hh">
                          Optimización del Talento: Identificamos las
                          habilidades y competencias individuales para colocar a
                          las personas adecuadas en las posiciones adecuadas.
                          Esto aumenta la productividad y la satisfacción de los
                          empleados.
                        </li>
                        <li className="rr-hh">
                          Desarrollo de Liderazgo: Capacitamos y desarrollamos a
                          los líderes de tu organización, fortaleciendo sus
                          habilidades para guiar equipos hacia el éxito. El
                          liderazgo efectivo es esencial para el crecimiento
                          sostenible.
                        </li>
                        <li className="rr-hh">
                          Adaptación al Cambio: En un mundo en constante
                          evolución, ayudamos a gestionar los cambios
                          organizativos y a mantener a tu equipo comprometido en
                          tiempos de transición.
                        </li>
                      </ul>
                      Ascendere es la clave para llevar a tu organización al
                      siguiente nivel. No solo se trata de gestionar el
                      personal, sino de optimizar su rendimiento y su
                      satisfacción para alcanzar resultados excepcionales.
                      ¿Estás listo para dar el siguiente paso hacia el éxito?
                      ¡Contáctanos hoy mismo y descubre cómo podemos ayudarte a
                      lograrlo!
                    </p>
                    <div className="link">
                      <Link to={"/contact"}>
                        <Button variant="contained">Contactanos</Button>
                      </Link>
                    </div>
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
