import img1 from "../../../assets/img/img1.webp";
import img2 from "../../../assets/img/img2.webp";
import img3 from "../../../assets/img/img3.webp";
import AOS from "aos"
import 'aos/dist/aos.css'
import { useContext, useEffect } from "react";
import { ServicioCarouselContext } from "../../../context/servicioCarouselContext";
import { Link } from "react-router-dom";
export const SeccionServicio = () => {
  useEffect(()=>{
    AOS.init({duration:700})
  },[])
    const { setCarouselActive } = useContext(ServicioCarouselContext);
    const handleActive = (e)=>{
        setCarouselActive(e)
        window.scrollTo({
          top: 350,
          behavior: "smooth",
        });
    }

  return (
    <div className="container-fluid servicios">
      <h2>Nuestros Servicios</h2>
      <div className="row">
        <div
          className="col-xs-4 card"
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          <img src={img1} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">¿Como mejorar el clima laboral?</h5>
            <p className="card-text">
              Ofrecemos asesoramiento estratégico para ayudar a las empresas a
              mejorar su clima interno y alcanzar sus objetivos.
            </p>
            <Link
              to={"/servicios"}
              onClick={() => handleActive(1)}
              className="btn btn-primary"
            >
              More info
            </Link>
          </div>
        </div>
        <div
          className="col-xs-4 card"
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          <img src={img2} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Autoliderazgo</h5>
            <p className="card-text">
              Proporcionamos asesoramiento y coaching para desarrollar tu mejor
              version.
            </p>
            <Link
              to={"/servicios"}
              onClick={() => handleActive(2)}
              className="btn btn-primary"
            >
              More info
            </Link>
          </div>
        </div>
        <div
          className="col-xs-4 card"
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
        >
          <img src={img3} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Consultoria de Recursos Humanos</h5>
            <p className="card-text">
              Ofrecemos soluciones para mejorar la gestion de los recursos
              humanos y la motivacion del personal para lograr los objetivos de
              la empresa.
            </p>
            <Link
              to={"/servicios"}
              onClick={() => handleActive(3)}
              className="btn btn-primary"
            >
              More info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
