import { Header } from "../../common/header/Header";
import { Footer } from "../../common/footer/Footer";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Contact.css";
import { FormMensaje } from "../../common/formMensaje/FormMensaje";
export const Contact = () => {
  return (
    <>
      <Header></Header>
      <div className="img-escribinos">
        <div></div>
        <div className="container" data-aos="fade-up" data-aos-duration="1000">
          <h1>Contáctese con nosotros</h1>
        </div>
      </div>
      <main className="container escribinos">
        <div className="row">
          <FormMensaje />
          <div className="col-12 col-md-5 info">
            <div data-aos="fade-right">
              <div>
                <p>EMAIL</p>
                <a href="mailto: ascendere.pd@gmail.com">
                  <EmailIcon />
                  ascendere.pd@gmail.com
                </a>
              </div>
              <div>
                <p>TEL</p>
                <a href="tel: +54 11 5461 6329">
                  <LocalPhoneIcon />
                  +54 11 5461 6329
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/company/ascenderepd/">
                  <LinkedInIcon />
                  Linkedin
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/ascendere.pd/">
                  <InstagramIcon />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row"></div>
      </main>
      <Footer></Footer>
    </>
  );
};
