/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Card, Grid, Hidden, IconButton, TextField } from "@material-ui/core";
import { VisibilityOff, Visibility } from "@material-ui/icons";
import { useLoader } from "../Loader/hooks/useLoader";
import { useStyles } from "./LoginStyles";
import { useForm } from "./hooks/useForm";
import { Images } from '../../assets/images'

const Login = () => {
  const classes = useStyles();
  const { handleShowLoader } = useLoader();
  const { formik } = useForm();
  const [show, setShow] = useState(false);

  useEffect(() => {
    handleShowLoader(true);

    setTimeout(() => {
      handleShowLoader(false);
    }, 1000);
  }, []);

  return (
    <Grid className={classes.container}>
      <form className={classes.form}>
        <Card className={classes.containerForm}>
          <Hidden xsDown>  
            <img src={Images.LogoPokemon} alt="logo" className={classes.icon}/>
          </Hidden>
          <Hidden smUp>  
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <img src={Images.LogoPokemon} alt="logo" className={classes.responsiveIcon}/>
          </div>
          </Hidden>
          <Grid>
            <TextField
              fullWidth
              variant="outlined"
              label="E-mail"
              placeholder="mail@dominio.com"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
              fullWidth
              variant="outlined"
              label="contraseña"
              type={show ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={() => setShow(!show)}>
                    {!show ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid className={classes.contentButton}>
            <Button
              className={classes.button}
              onClick={() => formik.submitForm()}
            >
              Log in
            </Button>
          </Grid>
        </Card>
      </form>
    </Grid>
  );
};

export { Login };
