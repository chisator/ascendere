import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";
import { Link } from "react-router-dom";
import { addService } from "../../../store/serviceSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export const Footer = () => {
  const dispatch = useDispatch();
  const scrollMove = () => {
    window.scrollTo(0, 0);
  };

  const [id, setId] = useState("");
  useEffect(() => {
    const scrollTo = () => {
      const mision = document.getElementById(id);
      if (mision) {
        mision.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };
    scrollTo();
  }, [id]);
  return (
    <footer className="container-fluid">
      <div className="row">
        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <h1 className="footer-logo">ASCENDERE</h1>
        </div>
        <div className="col-md-5">
          <div className="row">
            <div className="col-md-5">
              <h5 className="h5">La Empresa</h5>
              <ul>
                <li>
                  <Link to="/la-empresa">Quienes somos</Link>
                </li>
                <li>
                  <Link onClick={() => setId("mision")} to="/la-empresa">
                    Misión
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setId("vision")} to="/la-empresa">
                    Visión
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setId("valores")} to="/la-empresa">
                    Valores
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-7">
              <h5 className="h5">Servicios</h5>
              <ul>
                <li>
                  <Link
                    onClick={() => dispatch(addService(1))}
                    to={"/servicios"}
                  >
                    Clima Laboral
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => dispatch(addService(2))}
                    to={"/servicios"}
                  >
                    Autoliderazgo
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => dispatch(addService(3))}
                    to={"/servicios"}
                  >
                    Consultoría de RR.HH.
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-2 d-flex flex-column justify-content-between">
          <li>
            <Link
              onClick={() => scrollMove()}
              to={"/contact"}
              className="contacto"
            >
              Contacto
            </Link>
          </li>
          <li>
            <Link to={"/conoce-mas"} className="contacto">
              Conoce mas
            </Link>
          </li>
          <a href="https://www.linkedin.com/company/ascenderepd/">
            <LinkedInIcon
              style={{ fontSize: "40px" }}
              color="secondary"
            ></LinkedInIcon>
          </a>
        </div>
        <div className="col-sm-12 text-center">
          <hr />
        </div>
        <div className="col-sm-12 d-flex justify-content-center align-items-center">
          <p>
            ASCENDERE - People Developement - Consultoria en Recursos Humanos -
            Buenos Aires, Argentina.
          </p>
        </div>
      </div>
    </footer>
  );
};
