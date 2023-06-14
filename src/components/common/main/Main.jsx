import { SeccionServicio } from "../seccionServicios/SeccionServicio";
import AOS from "aos";
import { useEffect } from "react";

export const Main = () => {
   useEffect(() => {
     AOS.init({ duration: 700 });
   }, []);
  return (
    <main>
      <section className="image"></section>
      <div className="container-fluid home">
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
              individual y permitan a nuestros clientes alcanzar el éxito en sus
              objetivos.
            </p>
            <p>
              Buscamos ser un catalizador de crecimiento, empoderando a las
              personas para que asuman el control de su vida, desarrollen su
              autoliderazgo y generen un impacto positivo en sus entornos
              personales y profesionales.
            </p>
          </div>
        </div>
      </div>
      <section className="image"></section>
      <SeccionServicio />
      <section className="image"></section>
      <section className="container-fluid">
        <div className="row"></div>
      </section>
    </main>
  );
};
