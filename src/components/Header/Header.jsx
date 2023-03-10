import React from "react";
import {
  AppBar,
  Button,
  Grid,
  Hidden,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { PowerSettingsNew } from "@material-ui/icons";
import { useAuth } from "../Auth/hooks/useAuth";
import { useStyles } from "./HeaderStyles";
import { useHistory } from "react-router-dom";
import { Images } from "../../assets/images";

const Header = () => {
  const classes = useStyles();
  const auth = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    await auth.logout();

    history.push("/login");
  };

  return (
    <Grid className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.rootToolbar}>
          <Grid container className={classes.container}>
            <Grid item>
              <Hidden xsDown>
                <img
                  src={Images.LogoPokemon}
                  alt="pokemon"
                  className={classes.logo}
                  onClick={() => history.push("/")}
                />
              </Hidden>
            </Grid>
            <Grid item>
              <Typography
                className={classes.link}
                onClick={() => history.push("/")}
              >
                Ejercicio 1
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                className={classes.link}
                onClick={() => history.push("/test_2")}
              >
                Ejercicio 2
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="text"
                aria-controls="locale-menu"
                aria-haspopup="true"
                onClick={handleLogout}
              >
                <PowerSettingsNew fontSize="large" style={{ color: "white" }} />
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export { Header };
