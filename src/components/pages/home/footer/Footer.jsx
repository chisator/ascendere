
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import './Footer.css'
export const Footer = () => {
    return (
        <footer className='container-fluid'>
            <div className='row'>
                <div>
                    <h1 className='footer-logo' >ASCENDERE</h1>
                </div>
                <div>
                    <h5>La Empresa</h5>
                    <ul>
                        <li><a href="">Quienes somos</a></li>
                        <li><a href="">Misión</a></li>
                        <li><a href="">Visión</a></li>
                        <li><a href="">Valores</a></li>
                    </ul>
                </div>
                <div>
                    <h5>Servicios</h5>
                    <ul>
                        <li><a href="">Clima Laboral</a></li>
                        <li><a href="">Autoliderazgo</a></li>
                        <li><a href="">Consultoría de RR.HH.</a></li>
                    </ul>
                </div>
                <div>
                    <a href="">
                        <h5>Contacto</h5>
                    </a>
                    <a href="">
                        <LinkedInIcon color="secondary"></LinkedInIcon>
                    </a>
                </div>
            </div>
        </footer>
    )
}
