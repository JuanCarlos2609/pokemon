import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.error.main,
  },
  rootToolbar: {
    width: "95%",
  },
  container: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between"
  },
  logo: {
    width: theme.spacing(10),
    cursor: 'pointer'
  },
  link: {
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
      color: theme.palette.common.black
    }
  }
}));

export { useStyles };
