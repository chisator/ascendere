import { useEffect, useRef } from "react";
import { Footer } from "../../common/footer/Footer";
import { Header } from "../../common/header/Header";
import "./LaEmpresa.css";
export const LaEmpresa = () => {
  const myElementRef = useRef(null);

  useEffect(() => {
    if (myElementRef.current) {
      console.log(myElementRef.current);
      myElementRef.current.focus();
    }
  }, []);
  return (
    <>
      <Header> </Header>
      <div className="laEmpresa">
        <div className="separacion"></div>
        <div>
          <nav className="subnav-empresa"></nav>
        </div>
        <div className="container infoLP">
          <div className="row">
            <div className="col-lg-12 texto" data-aos="fade-up">
              <h1>ASCENDERE</h1>
              <p>
                Nuestro objetivo es inspirar y capacitar a las personas en todas
                las etapas de sus vidas para que descubran su potencial y se
                conviertan en líderes auténticos y efectivos.
              </p>
              <p>
                Nos comprometemos a brindar programas de desarrollo personal y
                profesional de alta calidad, que promuevan la transformación
                individual y permitan a nuestros clientes alcanzar el éxito en
                sus objetivos.
              </p>
              <p>
                Buscamos ser un catalizador de crecimiento, empoderando a las
                personas para que asuman el control de su vida, desarrollen su
                autoliderazgo y generen un impacto positivo en sus entornos
                personales y profesionales.
              </p>
            </div>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-12 texto">
              <h2>Misión</h2>
            </div>
            <div className="col-12 texto">
              <p>
                Nuestra misión es promover el desarrollo personal y profesional
                de las personas, brindando herramientas y conocimientos que les
                permitan convertirse en recursos valiosos, líderes excepcionales
                y alcanzar sus objetivos de manera efectiva. Nos comprometemos a
                empoderar a nuestros clientes para que descubran su máximo
                potencial y se conviertan en agentes de cambio en sus vidas y en
                sus organizaciones.
              </p>
            </div>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-12 texto">
              <h2>Visión</h2>
            </div>
            <div className="col-12 texto">
              <p>
                Ser reconocidos como la consultora líder en el desarrollo de
                autoliderazgo, proporcionando soluciones innovadoras y
                transformadoras que impulsen el crecimiento personal y
                profesional en todas las etapas de la vida. Nuestro objetivo es
                ser el socio preferido por individuos y empresas en su búsqueda
                de excelencia, impactando positivamente la sociedad a través del
                desarrollo de líderes auténticos y efectivos.
              </p>
            </div>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-12 texto">
              <h2>Valores</h2>
            </div>
            <div className="col-12 texto sub-valores">
              <ul className="ul-sub-valores">
                <li>
                  <h4>Excelencia</h4>
                </li>
                <p>
                  Nos esforzamos por brindar servicios de la más alta calidad y
                  superar las expectativas de nuestros clientes en todo momento.
                </p>
                <li>
                  <h4>Integridad</h4>
                </li>
                <p>
                  Actuamos con honestidad, transparencia y ética en todas
                  nuestras interacciones y decisiones.
                </p>
                <li>
                  <h4>Empoderamiento</h4>
                </li>
                <p>
                  Capacitamos a las personas para que descubran su propio poder
                  y asuman la responsabilidad de su crecimiento y éxito.
                </p>
                <li>
                  <h4>Innovación</h4>
                </li>
                <p>
                  Buscamos constantemente nuevas ideas y enfoques para brindar
                  soluciones creativas y efectivas en el desarrollo del
                  autoliderazgo.
                </p>
                <li>
                  <h4>Colaboración</h4>
                </li>
                <p>
                  Fomentamos un ambiente de trabajo colaborativo, donde el
                  respeto, la diversidad de opiniones y el trabajo en equipo
                  sean valorados.
                </p>
                <li>
                  <h4>Impacto</h4>
                </li>
                <p>
                  Nos enfocamos en generar un impacto positivo y duradero en la
                  vida de las personas, las organizaciones y la sociedad en
                  general.
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
