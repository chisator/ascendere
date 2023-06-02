import { useState } from "react";
import logo from '../../../../assets/img/logo-sin-fondo.png'
import { Link } from "react-router-dom";


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
          <div className='col-sm-9 col-6 '>
            <a href="#" className='d-flex align-items-center'>
              <img className='logo-header' src={logo} alt="" />

            </a>
          </div>
          <div className='col-sm-3 col-6  d-flex justify-content-around align-items-center'>
            <Link to="/contact"><button><span className="text">Contactanos</span></button></Link>
          </div>

        </div>

      </div>
    </header>
  )
}
