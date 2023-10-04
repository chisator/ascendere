import "./ConoceMas.css";
import { Footer } from "../../common/footer/Footer";
import { Header } from "../../common/header/Header";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { animateScroll as scroll} from "react-scroll"

export const ConoceMas = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  
  const onClickUp = () => {
    scroll.scrollToTop();
  };
  useEffect(() => {
    onClickUp()
    window.scrollTo(0, -110);
    
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-397vw",
        ease: "none",
        duration: 0.1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
          pin: true,
          snap: {
            snapTo: 1 / (5 - 1),
            inertia: false,
            duration: { min: 0.5, max: 0.5 },
          },
        },
      }
      );
      return () => {
        {
          /* A return function for killing the animation on component unmount */
        }
        pin.kill();
        
    };
  }, []);
  /*let panelsContainer = document.querySelector("#panels-container");

     const panels = gsap.utils.toArray(".panel");
    gsap.to(
      panels,
      {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: "#panels-container",
          pin: true,
          start: "top top",
          scrub: 1,
          snap: {
            snapTo: 1 / (panels.length - 1),
            inertia: false,
            duration: { min: 0.1, max: 0.1 },
          },
          end: () => "+=" + (panelsContainer.offsetWidth - innerWidth),
        },
      },
    ); */

  return (
    <>
      <Header />
      <div className="conoceMas">
        <Box
          className="sobreMi par"
          flexDirection={{ xs: "column-reverse", md: "row" }}
          margin={{ xs: "auto" }}
          justifyContent={{ xs: "center", md: "space-around" }}
        >
          <div>
            <Typography
              variant="h2"
              fontSize={{ xs: 30, md: 50 }}
              letterSpacing={4}
              fontWeight={500}
              paddingBottom={1}
              textTransform={"uppercase"}
              textAlign={{ xs: "center", md: "start" }}
            >
              Matías Camigliano
            </Typography>
            <Typography
              variant="h5"
              maxWidth={600}
              fontSize={{ xs: 20, md: 20 }}
              textAlign={{ xs: "center", sm: "start" }}
            >
              ¡Hola! Soy un apasionado de los recursos humanos con un sólido
              trasfondo en tecnología y gestión de proyectos. Criado en
              Avellaneda, Buenos Aires, y con el orgullo de ser hincha de Boca
              Juniors, aprendí desde temprano la importancia de las relaciones
              humanas y la determinación necesaria para alcanzar metas
              ambiciosas.
            </Typography>
          </div>
          <div className="img" />
        </Box>
        <section id="panels" ref={triggerRef}>
          <div id="panels-container" ref={sectionRef} style={{ width: "500%" }}>
            <section className="panel full-screen impar">
              <Typography
                variant="h2"
                fontSize={{ xs: 40, md: 50 }}
                letterSpacing={4}
                fontWeight={500}
                paddingBottom={1}
                textAlign={"center"}
                textTransform={"uppercase"}
              >
                Formación
              </Typography>
              <Typography
                variant="h5"
                textAlign={"justify"}
                padding={1}
                fontSize={{ xs: 20, md: 20 }}
              >
                Mi formación académica incluye una licenciatura en Gestión de
                Clima Laboral de la Universidad Siglo 21 y un Máster en
                Dirección Estratégica de Recursos Humanos de la Universidad
                Tecnológica (España). Estos estudios me han proporcionado una
                base sólida para comprender y optimizar el entorno laboral, un
                activo invaluable en cualquier organización.
              </Typography>
            </section>
            <section className="panel full-screen par">
              <Typography
                variant="h2"
                fontSize={{ xs: 40, md: 50 }}
                letterSpacing={4}
                fontWeight={500}
                paddingBottom={1}
                textAlign={"center"}
                textTransform={"uppercase"}
              >
                Formación Laboral
              </Typography>
              <Typography
                variant="h5"
                textAlign={"justify"}
                padding={1}
                fontSize={{ xs: 16, md: 20 }}
              >
                Mi carrera comenzó en el mundo de la tecnología, donde acumulé
                18 años de experiencia en diversas áreas, como Help Desk, End
                User Support y Seguridad de la Información. A lo largo de más de
                una década, tuve el privilegio de liderar y supervisar equipos
                de trabajo y proyectos, lo que me permitió desarrollar
                habilidades de gestión y liderazgo esenciales. <br />
                Desde 2021, ocupo el puesto de Team Engagement Manager en
                Launchpad Technologies, donde combino mis 15 años de experiencia
                en gestión de proyectos de TI con mis conocimientos en recursos
                humanos. Mi enfoque se centra en la gestión integral de
                proyectos y recursos de Staff Augmentation, con el objetivo de
                alcanzar una dirección en las áreas de recursos humanos o
                tecnología en los próximos 5 años. <br />
                Además de mi trabajo en Launchpad Technologies, he tenido la
                oportunidad de compartir mis conocimientos como instructor.
                Impartí el módulo de Autoliderazgo en un curso de Community
                Manager para la Consultora Lima, contribuyendo así a la
                formación y desarrollo de futuros profesionales.
              </Typography>
            </section>
            <section className="panel full-screen impar">
              <Typography
                variant="h2"
                fontSize={{ xs: 40, md: 50 }}
                letterSpacing={3}
                fontWeight={500}
                paddingBottom={1}
                textAlign={"center"}
                textTransform={"uppercase"}
              >
                Objetivos
              </Typography>
              <Typography
                variant="h5"
                textAlign={"justify"}
                fontSize={{ xs: 16, md: 20 }}
                padding={2}
              >
                En el ámbito organizacional, mi objetivo es forjar equipos de
                trabajo altamente efectivos mediante metodologías de liderazgo
                vanguardistas. Mi enfoque se centra en cambiar el paradigma
                desde la simple retención de talento hacia la gestión fluida del
                talento interno. Desde la consultoría en Recursos Humanos,
                aspiro a empoderar emprendimientos, proyectos, equipos y
                organizaciones para que alcancen su máximo potencial.
              </Typography>
            </section>
            <section className="panel full-screen par">
              <Typography
                variant="h5"
                textAlign={"justify"}
                fontSize={{ xs: 16, md: 20 }}
                padding={2}
              >
                Basado en esta visión y pasión, decidí crear Ascendere. Nuestra
                misión, visión y valores están centrados en fomentar el
                desarrollo tanto a nivel individual como organizacional, guiando
                a las personas y empresas en la búsqueda de su máximo potencial
                y en la consecución de sus objetivos. En Ascendere, creemos en
                el poder de la transformación personal y organizacional, y
                estamos comprometidos a ser un catalizador en este viaje hacia
                el éxito y la realización de sueños.
              </Typography>
            </section>
            <section className="panel full-screen impar">
              <Typography
                variant="h5"
                textAlign={"justify"}
                fontSize={{ xs: 16, md: 20 }}
                padding={2}
              >
                Estoy comprometido con el crecimiento y el éxito de las
                organizaciones a través de la gestión eficiente de recursos
                humanos y la mejora del clima laboral. Siempre estoy dispuesto a
                asumir nuevos desafíos y oportunidades para aprender y crecer.
                <br />
                Si crees que puedo ayudarte a ti o a tu organización, ¡no dudes
                en contactarme! Ascendere es tu mejor opción para alcanzar otro
                nivel!
              </Typography>
            </section>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
