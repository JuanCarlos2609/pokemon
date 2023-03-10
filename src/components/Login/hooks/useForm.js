import { Button, Grid, Typography } from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import { useModal } from "../../Modal";
import { useStyles } from "../LoginStyles";
import { useAuth } from "../../Auth/hooks/useAuth";
import { useLoader } from "../../Loader/hooks/useLoader";

export const useForm = () => {
  const classes = useStyles();
  const auth = useAuth();
  const { handleOpenModal, handleCloseModal } = useModal();
  const { handleShowLoader } = useLoader();
  const requiredField = "Este campo es obligatorio.";
  const validEmail = "Escriba un email válido.";

  const validationSchema = yup.object({
    email: yup.string().email(validEmail).required(requiredField),
    password: yup.string().required(requiredField),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const user = {
        email: "mail@dominio.com",
        password: "Hola123.",
      };

      if (
        user.email === formik.values.email &&
        user.password === formik.values.password
      ) {
        auth.login({
          ...values,
          email: values.email.trim().toLowerCase(),
          role: "user",
        });
      } else {
        handleShowLoader(true);

        setTimeout(() => {
          handleOpenModal({
            title: (
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: 800,
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                error
              </Typography>
            ),
            body: (
              <Grid>
                <Typography className={classes.description}>
                  El email o la contraseña son incorrectos
                </Typography>
                <Typography className={classes.description}>
                  Por favor vuelve a intentarlo.
                </Typography>
                <Grid className={classes.contentButton}>
                  <Button
                    className={classes.button}
                    onClick={() => handleCloseModal(false)}
                  >
                    Aceptar
                  </Button>
                </Grid>
              </Grid>
            ),
          });
          handleShowLoader(false);
        }, 1000);
      }
    },
  });

  return {
    formik,
  };
};
