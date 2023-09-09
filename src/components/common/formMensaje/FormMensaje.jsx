import { Alert, Button, Grid, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export const FormMensaje = () => {
  const form = useRef();

  const [alert, setAlert] = useState(false);
  const alerta = () => {
    setAlert(!alert);
  };
  let valoresIniciales = {
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  };
  const sendEmail = async (data) => {
    let dataDB = {
      email: data.email,
      nombre: data.nombre,
      tel: data.telefono,
      mensaje: data.mensaje,
    };
    await addDoc(collection(db, "leads"), dataDB);
    emailjs
      .sendForm(
        "service_aehgh98",
        "template_vzwhr8x",
        form.current,
        "WT1QDXquCnNrkcVIv"
      )
      .then(
        () => {
          setAlert(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues: valoresIniciales,
      validationSchema: Yup.object({
        nombre: Yup.string().required("Ingresa tu nombre"),
        email: Yup.string()
          .email("Ingrese un email valido")
          .required("Ingrese un email"),
        telefono: Yup.number("Solo se permiten numeros")
          .min(1111111, "Ingrese un numero valido")
          .required("Ingrese un numero"),
        mensaje: Yup.string()
          .min(5, "Mensaje muy corto")
          .required("Dejenos su mensaje"),
      }),
      onSubmit: sendEmail,
    });
  return (
    <>
      <div className="col-12 col-md-6  form-container" data-aos="zoom-in-up">
        {alert ? (
          <Alert variant="filled" severity="success" onClose={() => alerta()}>
            Formulario enviado, espere nuestra respuesta.
          </Alert>
        ) : null}
        <h3>
          Completa el formulario y recibiras nuestra respuesta a la brevedad
        </h3>
        <form action="" ref={form} onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                autoComplete="name"
                fullWidth
                className=""
                id="name"
                label="Nombre"
                variant="standard"
                name="nombre"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nombre}
                helperText={touched.nombre ? errors.nombre : null}
                error={touched.nombre && errors.nombre ? true : false}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                className=""
                id="phone"
                label="Telefono"
                variant="standard"
                name="telefono"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.telefono}
                helperText={touched.telefono ? errors.telefono : null}
                error={touched.telefono && errors.telefono ? true : false}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                className=""
                id="standard-basic"
                label="Email"
                variant="standard"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                helperText={touched.email ? errors.email : null}
                error={touched.email && errors.email ? true : false}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                className=""
                multiline
                id="standard-basic"
                label="Mensaje"
                variant="standard"
                name="mensaje"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.mensaje}
                helperText={touched.mensaje ? errors.mensaje : null}
                error={touched.mensaje && errors.mensaje ? true : false}
              />
            </Grid>
          </Grid>
          <br />
          <Button
            style={{
              position: "absolute",
              right: "0",
              width: "50%",
              backgroundColor: "rgb(70, 70, 218)",
            }}
            id="button"
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
          >
            Enviar
          </Button>
        </form>
      </div>
    </>
  );
};
