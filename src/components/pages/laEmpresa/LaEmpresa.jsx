import { Footer } from "../../common/footer/Footer";
import { Header } from "../../common/header/Header";
import "./LaEmpresa.css";
export const LaEmpresa = () => {
  return (
    <div className="laEmpresa">
      <Header></Header>
      <div>
        <nav className="subnav-empresa"></nav>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Misión</h2>
          </div>
          <div className="col-12">
            <p>
              Nuestra misión es promover el desarrollo personal y
              profesional de las personas, brindando herramientas y
              conocimientos que les permitan convertirse en recursos valiosos,
              líderes excepcionales y alcanzar sus objetivos de manera efectiva.
              Nos comprometemos a empoderar a nuestros clientes para que
              descubran su máximo potencial y se conviertan en agentes de cambio
              en sus vidas y en sus organizaciones.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2>Visión</h2>
          </div>
          <div className="col-12">
            <p>
              Ser reconocidos como la consultora líder en el desarrollo de
              autoliderazgo, proporcionando soluciones innovadoras y
              transformadoras que impulsen el crecimiento personal y profesional
              en todas las etapas de la vida. Nuestro objetivo es ser el socio
              preferido por individuos y empresas en su búsqueda de excelencia,
              impactando positivamente la sociedad a través del desarrollo de
              líderes auténticos y efectivos.
            </p>
          </div>
          <div className="row">
            <div className="col-12">
              <h2>Valores</h2>
            </div>
            <div className="col-12">
              <h4>Excelencia</h4>
              <p>
                Nos esforzamos por brindar servicios de la más alta calidad y
                superar las expectativas de nuestros clientes en todo momento.
              </p>
              <h4>Integridad</h4>
              <p>
                Actuamos con honestidad, transparencia y ética en todas nuestras
                interacciones y decisiones.
              </p>
              <h4>Empoderamiento</h4>
              <p>
                Capacitamos a las personas para que descubran su propio poder y
                asuman la responsabilidad de su crecimiento y éxito.
              </p>
              <h4>Innovación</h4>
              <p>
                Buscamos constantemente nuevas ideas y enfoques para brindar
                soluciones creativas y efectivas en el desarrollo del
                autoliderazgo.
              </p>
              <h4>Colaboración</h4>
              <p>
                Fomentamos un ambiente de trabajo colaborativo, donde el
                respeto, la diversidad de opiniones y el trabajo en equipo sean
                valorados.
              </p>
              <h4>Impacto</h4>
              <p>
                Nos enfocamos en generar un impacto positivo y duradero en la
                vida de las personas, las organizaciones y la sociedad en
                general.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
