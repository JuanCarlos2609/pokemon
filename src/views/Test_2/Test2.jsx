/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./Test2Styles";
import { useModal } from "../../components/Modal/hooks/useModal";
import { useLoader } from "../../components/Loader";

const Test2 = () => {
  const classes = useStyles();
  const { handleOpenModal } = useModal();
  const { handleShowLoader } = useLoader();

  useEffect(() => {
    handleShowLoader(true);

    setTimeout(() => {
      handleShowLoader(false);
    }, 1000);
  }, [])
  

  const array = [
    {
      aseguradora: "AFIRME",
      cotizacion: {
        cliente: {
          tipoPersona: "fisica",
          nombre: "prueba",
          apellidoPat: "prueba",
          apellidoMat: "prueba",
          rfc: "",
          fechaNacimiento: "01-01-2005",
          ocupacion: "",
          curp: "",
          direccion: {
            calle: "oriente 945",
            noExt: "410",
            noInt: "021",
            colonia: "prueba",
            codPostal: "56618",
            poblacion: "mexico",
            ciudad: "cdmx",
            pais: "mexico",
          },
          edad: "18",
          genero: "MASCULINO",
          telefono: "",
          email: "",
        },
      },
    },
  ];

  const newArray = array.map((item) => {

    return {
      aseguradora: 'MAPFRE',
      cotizacion: {
          nombre: "Ilse Yaret",
          apellidoPat: "prueba",
          apellidoMat: "prueba",
          rfc: "",
          fechaNacimiento: "01-01-2005",
          ocupacion: "",
          curp: "",
          direccion: {
            calle: "oriente 945",
            noExt: "410",
            noInt: "021",
            colonia: "prueba",
            codPostal: "56618",
            poblacion: "mexico",
            ciudad: "cdmx",
            pais: "mexico",
          },
          edad: "25",
          genero: "FEMENINO",
          telefono: "5511223344",
          email: "mail@dominio.com",
      }
    }
  })

  const concatArray = array.concat(newArray);

  console.log('ARRAY', concatArray);

  return (
    <div style={{ marginTop: 20 }} className={classes.container}>
      <Typography className={classes.title}>EJERCICIO 2</Typography>
      <Grid className={classes.containerButton}>
        <Button
          className={classes.button}
          onClick={() =>
            handleOpenModal({
              title: <Typography style={{textAlign: 'center', fontWeight: 800}}>JSON</Typography>,
              body: <Typography>{JSON.stringify(concatArray)}</Typography>,
            })
          }
        >
          Abrir Modal
        </Button>
      </Grid>
    </div>
  );
};

export { Test2 };
