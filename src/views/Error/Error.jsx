import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import { Container, Typography, Button } from "@material-ui/core";
import "./Error.scss";
import { useAuth } from "../../components/Auth/hooks/useAuth";

const Error = () => {
  const history = useHistory();
  const auth = useAuth();

  const role = auth?.user || 'public';

  if (role === 'public') {
    return <Redirect to="/login" />;
  }

  return (
    <Container className="container-not-found" maxWidth="xl">
      <div>
        <Typography variant="h1">Error</Typography>
        <Typography variant="h5" color="secondary">
          Ha ocurrido un error inesperado
        </Typography>
        <Typography component="p" variant="subtitle2">
          Lo lamentamos, estaremos trabajando en resolver este error inesperado.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => history.push("/")}
        >
          Ir a la página de inicio
        </Button>
      </div>
    </Container>
  );
}

export { Error };
