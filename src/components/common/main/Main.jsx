import img1 from '../../../assets/img/img1.webp'
import img2 from '../../../assets/img/img2.webp'
import img3 from '../../../assets/img/img3.webp'
export const Main = () => {
  return (
    <main>
      <section className='image'></section>
        <div className="container-fluid home">
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
              <img src={img1} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">¿Como mejorar el clima laboral?</h5>
                <p className="card-text">Ofrecemos asesoramiento estratégico para ayudar a las empresas a mejorar su clima interno y alcanzar sus objetivos.</p>
              <a href="#" className="btn btn-primary">More info</a>
              </div>
            </div>
            <div className="col-xs-4 card" >
              <img src={img2} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Autoliderazgo</h5>
                <p className="card-text">Proporcionamos asesoramiento y coaching para desarrollar tu mejor version.</p>
              <a href="#" className="btn btn-primary">More info</a>
              </div>
            </div>
            <div className="col-xs-4 card" >
              <img src={img3} className="card-img-top" alt="" />
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
  )
}
