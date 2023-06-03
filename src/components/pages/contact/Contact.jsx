import { Button, Grid, TextField } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { Header } from "../../common/header/Header"
import { Footer } from "../../common/footer/Footer"
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import './Contact.css'
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
                    <div className="col-12 col-md-6  form-container">
                        <h3>Completa el formulario y recibiras nuestra respuesta a la brevedad</h3>
                        <form  action="">
                            <Grid
                            container
                            spacing={3}
                            >
                                <Grid item xs={12} md={6} >
                                    <TextField fullWidth className="" id="standard-basic" label="Nombre" variant="standard" />
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <TextField fullWidth className="" id="standard-basic" label="Telefono" variant="standard" />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <TextField fullWidth className="" id="standard-basic" label="Email" variant="standard" />
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <TextField fullWidth className="" id="standard-basic" label="Mensaje" variant="standard" />
                                </Grid>
                            </Grid>
                            <br />
                            <Button style={{position:"absolute", right:"0", width:"50%", backgroundColor:"rgb(70, 70, 218)"}} type="submit" variant="contained" endIcon={<SendIcon />}>Enviar</Button>
                        </form>
                    </div>
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
