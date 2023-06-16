import { useRef, useState } from "react";
import logo from "../../../assets/img/logo-sin-fondo.png";
import { Link } from "react-router-dom";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useDispatch } from "react-redux";
import { addService } from "../../../store/serviceSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const scrollMove = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleActive = (e) => {
    dispatch(addService(e));
  };
  const line1BarsRef = useRef(null);
  const line2BarsRef = useRef(null);
  const line3BarsRef = useRef(null);

  const animateBars = () => {
    line1BarsRef.current.classList.toggle("activeline1__bars-menu");
    line2BarsRef.current.classList.toggle("activeline2__bars-menu");
    line3BarsRef.current.classList.toggle("activeline3__bars-menu");
    setIsShow(!isShow);
  };
  const [isShow, setIsShow] = useState(false);
  const [visible, setVisible] = useState("visible");
  const [isHovered, setIsHovered] = useState(false);

  let handleHover = () => {
    setIsHovered(true);
  };
  const handleHoverDisable = () => {
    setIsHovered(false);
  };
  let prevScrollPos = window.pageYOffset;
  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      setVisible("visible");
    } else {
      setVisible(" ");
      setIsShow(false);
      line1BarsRef.current.classList.remove("activeline1__bars-menu");
      line2BarsRef.current.classList.remove("activeline2__bars-menu");
      line3BarsRef.current.classList.remove("activeline3__bars-menu");
    }
    prevScrollPos = currentScrollPos;
  };
  return (
    <header className={`header-main ${visible}`}>
      <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container-fluid">
          <div className="col-sm-3 col-4">
            <Link
              onClick={() => scrollMove()}
              to={"/"}
              style={{ width: "100px" }}
              className="m-auto d-flex align-items-center"
            >
              <img className="logo-header" src={logo} alt="" />
            </Link>
          </div>
          <div onClick={() => animateBars()} className="bars__menu">
            <span className="line1__bars-menu" ref={line1BarsRef}></span>
            <span className="line2__bars-menu" ref={line2BarsRef}></span>
            <span className="line3__bars-menu" ref={line3BarsRef}></span>
          </div>
          <div className={`navbar-ul col-8 ${isShow ? "show" : ""}`}>
            <ul className={`${isShow ? "show" : ""}navbar-nav`}>
              <div className="nav-empresa-servicio">
                <li>
                  <Link onClick={() => scrollMove()} to={"/la-empresa"}>
                    La Empresa
                  </Link>
                </li>
                <li>
                  <div className="dropdown">
                    <a
                      onMouseEnter={handleHover}
                      onMouseLeave={handleHoverDisable}
                      className={isHovered ? "show" : ""}
                      data-bs-toggle="dropdown"
                    >
                      Servicios <KeyboardArrowUpIcon />
                    </a>

                    <ul
                      className={
                        isHovered ? "show dropdown-menu" : "dropdown-menu"
                      }
                      onMouseEnter={handleHover}
                      onMouseLeave={handleHoverDisable}
                    >
                      <li>
                        <Link
                          onClick={() => handleActive(1)}
                          className=""
                          to={"/servicios"}
                        >
                          Clima Laboral
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => handleActive(2)}
                          className=""
                          to={"/servicios"}
                        >
                          Autoliderazgo
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={() => handleActive(3)}
                          className=""
                          to={"/servicios"}
                        >
                          Consultoria de RRHH
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </div>
              <div className="nav-contact col-sm-3 col-5">
                <li>
                  <Link onClick={() => scrollMove()} to="/contact">
                    Contactanos
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
