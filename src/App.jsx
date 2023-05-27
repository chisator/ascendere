import './App.css'
import logo from './assets/img/logo-sin-fondo.png'
function App() {
  return (
    <>
      <header>
        <div className="container-xl">
          <div className='row'>
            <div className='col-sm-9'>
              <img className='logo-header' src={logo} alt="" />
            </div>
            <div className='col-sm-3 d-flex justify-content-around align-items-center'>
              <a href=""><button><span className="text">Contactanos</span></button></a>
            </div>

          </div>

        </div>
      </header>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h1>Ascendere</h1>
              <p>Nuestro objetivo es inspirar y capacitar a las personas en todas las etapas de sus vidas para que descubran su potencial y se conviertan en líderes auténticos y efectivos. Nos comprometemos a brindar programas de desarrollo personal y profesional de alta calidad, que promuevan la transformación individual y permitan a nuestros clientes alcanzar el éxito en sus objetivos. Buscamos ser un catalizador de crecimiento, empoderando a las personas para que asuman el control de su vida, desarrollen su autoliderazgo y generen un impacto positivo en sus entornos personales y profesionales.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
