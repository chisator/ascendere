import { Header } from "../../common/header/Header"
import { Footer } from "../../common/footer/Footer"
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import './Contact.css'
import { FormMensaje } from "../../common/formMensaje/FormMensaje";
export const Contact = () => {
    return (
        <>
            <Header></Header>
            <div className="img-escribinos">
                <div></div>
                <div className="container">
                    <h1>Contáctese con nosotros</h1>
                </div>

            </div>
            <main className="container escribinos">
                <div className="row">
                    <FormMensaje/>
                    <div className="col-12 col-md-5 info">
                        <div>
                            <p>EMAIL</p>
                            <a href="">
                                <EmailIcon/>gianfranco@hotmail.com
                            </a>
                        </div>
                        <div>
                            <p>TEL</p>
                            <a href="">
                                <LocalPhoneIcon/>+54 11 5461 6329
                            </a>
                        </div>
                        <div>
                            
                            <a href="">
                                <LinkedInIcon/>Linkedin
                            </a>
                        </div>
                        <div>
                            
                            <a href="">
                                <InstagramIcon/>Instagram
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row"></div>
            </main>
            <Footer></Footer>
        </>
    )
}
