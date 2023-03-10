import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  dialog: {
    zIndex: `${theme.zIndex.drawer + 1} !important`
  }
}));

export { useStyles };
