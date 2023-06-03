import { useState } from "react";
import logo from '../../../assets/img/logo-sin-fondo.png'
import { Link } from "react-router-dom";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export const Header = () => {
  const [visible, setVisible] = useState('visible')

  let prevScrollPos = window.pageYOffset;
  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      setVisible('visible')
    } else {
      setVisible(' ')
    }
    prevScrollPos = currentScrollPos;
  }
  return (
    <header className={visible}>
      <div className="container">
        <div className='row'>
          <div className='col-sm-3 col-4 '>
            <Link to={"/"} className='d-flex align-items-center'>
              <img className='logo-header' src={logo} alt="" />

            </Link>
          </div>
          <div className="col-sm-6 col-3 d-flex align-items-center">
            <ul className="d-flex align-items-center justify-content-evenly gap-5">
              <li><Link to={"/la-empresa"}>La Empresa</Link></li>
              <li><div className="dropdown">
                <a className=""  data-bs-toggle="dropdown" >
                  Servicios <KeyboardArrowUpIcon/>
                </a>

                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Clima Laboral</a></li>
                  <li><a className="dropdown-item" href="#">Autoliderazgo</a></li>
                  <li><a className="dropdown-item" href="#">Consultoria de RRHH</a></li>
                </ul>
              </div>
              </li>
            </ul>
          </div>
          <div className='col-sm-3 col-5  d-flex justify-content-around align-items-center'>
            <li>
              <Link to="/contact">Contactanos</Link>
            </li>
          </div>

        </div>

      </div>
    </header>
  )
}
