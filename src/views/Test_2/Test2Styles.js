import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    margin: `0 ${theme.spacing(5)}px`,
    paddingTop: theme.spacing(4),
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(2),
    },
  },
  title: {
    fontSize: '20px',
    fontWeight: 800,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  containerText: {
    width: '10%',
    backgroundColor: 'pink'
  },
  containerButton: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.common.white,
    width: '15%',
    letterSpacing: '1px',
    [theme.breakpoints.down('xs')]: {
        width: 'auto'
    }
  }
}));

export { useStyles };
