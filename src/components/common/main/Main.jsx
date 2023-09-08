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
      <SeccionServicio />
      <section className="image"></section>
      <section className="container-fluid">
        <div className="row"></div>
      </section>
    </main>
  );
};
