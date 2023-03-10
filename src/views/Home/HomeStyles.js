import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    margin: `0 ${theme.spacing(2)}px`,
    paddingTop: theme.spacing(13),
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(2),
      margin: `0 ${theme.spacing(1)}px`,
    },
  },
  containerSearch: {
    alignItems: "center",
    justifyContent: "flex-end",
    dysplay: "flex",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
      marginTop: theme.spacing(2),
    },
  },
  gridSearch: {
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      display: "flex",
      justifyContent: "center",
    },
  },
  noDataText: {
    isplay: "flex",
    justifyContent: "center",
  },
  contentGrid: {
    display: "flex",
    justifyContent: "center",
  },
  contentPagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(5)
  },
  pagination: {
    "& .MuiPagination-ul li .Mui-selected": {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
  },
}));

export { useStyles };
