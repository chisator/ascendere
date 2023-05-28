import { useState } from 'react';
import './App.css'
import logo from './assets/img/logo-sin-fondo.png'
function App() {
  const [visible, setVisible]= useState('visible')

  let prevScrollPos = window.pageYOffset;
  window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      setVisible('visible')
    } else{
        setVisible(' ')   
      } 
      prevScrollPos = currentScrollPos;
    }
  
  return (
    <>
      <header className={visible}>
        <div className="container-xl">
          <div className='row'>
            <div className='col-xs-6 col-sm-9 '>
              <a href="#" className='d-flex align-items-center'>
                <img className='logo-header' src={logo} alt="" />
                
              </a>
            </div>
            <div className='col-xs-6 col-sm-3  d-flex justify-content-around align-items-center'>
              <a href=""><button><span className="text">Contactanos</span></button></a>
            </div>

          </div>

        </div>
      </header>
      <main>
      <section className='image'></section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 texto">
              <h1>ASCENDERE</h1>
              <p>Nuestro objetivo es inspirar y capacitar a las personas en todas las etapas de sus vidas para que descubran su potencial y se conviertan en líderes auténticos y efectivos.</p>
              <p>Nos comprometemos a brindar programas de desarrollo personal y profesional de alta calidad, que promuevan la transformación individual y permitan a nuestros clientes alcanzar el éxito en sus objetivos.</p>
              <p>Buscamos ser un catalizador de crecimiento, empoderando a las personas para que asuman el control de su vida, desarrollen su autoliderazgo y generen un impacto positivo en sus entornos personales y profesionales.</p>
            </div>
          </div>
        </div>
        <section className='image'></section>
        <div className="container-fluid servicios">
            <h2>Nuestros Servicios</h2>
          <div className="row">
            <div className="col-xs-4 card" >
              <img src={logo} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">¿Como mejorar el clima laboral?</h5>
                <p className="card-text">Ofrecemos asesoramiento estratégico para ayudar a las empresas a mejorar su clima interno y alcanzar sus objetivos.</p>
              <a href="#" className="btn btn-primary">More info</a>
              </div>
            </div>
            <div className="col-xs-4 card" >
              <img src={logo} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Autoliderazgo</h5>
                <p className="card-text">Proporcionamos asesoramiento y coaching para desarrollar tu mejor version.</p>
              <a href="#" className="btn btn-primary">More info</a>
              </div>
            </div>
            <div className="col-xs-4 card" >
              <img src={logo} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Consultoria de Recursos Humanos</h5>
                <p className="card-text">Ofrecemos soluciones para mejorar la gestion de los recursos humanos y la motivacion del personal para lograr los objetivos de la empresa.</p>
              <a href="#" className="btn btn-primary">More info</a>
              </div>
            </div>
          </div>
        </div>
        <section className='image'></section>
        <section className="container-fluid">
          <div className="row">

          </div>
        </section>
      </main>
    </>
  )
}

export default App
