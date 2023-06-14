import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";
import { Link } from "react-router-dom";
import { addService } from "../../../store/serviceSlice";
import { useDispatch } from "react-redux";
export const Footer = () => {
  const dispatch = useDispatch();
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
                  <a href="">Quienes somos</a>
                </li>
                <li>
                  <a href="">Misión</a>
                </li>
                <li>
                  <a href="">Visión</a>
                </li>
                <li>
                  <a href="">Valores</a>
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
            <Link to={"/contact"} className="contacto">
              Contacto
            </Link>
          </li>
          <a href="">
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
