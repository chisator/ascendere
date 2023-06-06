import { Alert, Button, Grid, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
export const FormMensaje = () => {
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
  const dataForm = (data) => {
    
    setAlert(true);
    console.log(data);
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
      onSubmit: dataForm,
    });
  return (
    <>
      <div className="col-12 col-md-6  form-container">
      {alert ? (
        <Alert variant="filled" severity="success" onClose={() => alerta()}>
          Formulario enviado, espere nuestra respuesta.
        </Alert>
      ) : null}
        <h3>
          Completa el formulario y recibiras nuestra respuesta a la brevedad
        </h3>
        <form action="" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                className=""
                id="standard-basic"
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
                id="standard-basic"
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
