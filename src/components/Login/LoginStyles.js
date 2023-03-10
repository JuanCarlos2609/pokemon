import { makeStyles } from '@material-ui/core/styles';
import { Images } from '../../assets/'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${Images.PikachuLayout})`,
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      padding: theme.spacing(0),
      height: 'auto'
    }
  },
  form: {
    '& .MuiFormControl-root': {
      marginBottom: theme.spacing(2.5),
      borderRadius: theme.spacing(0.5),
      '& div:first-of-type': {
        borderRadius: theme.spacing(0.5)
      },
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1)
    }
  },
  containerForm: {
    maxWidth: theme.typography.pxToRem(340),
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    opacity: 0.95,
    borderRadius: '15px'
  },
  icon: {
    marginBottom: theme.spacing(6),
  },
  responsiveIcon: {
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  spacingInput: {
    marginBottom: theme.spacing(2)
  },
  contentButton: {
    justifyContent: 'center',
    display: 'flex',
    marginTop: theme.spacing(2)
  },
  button: {
    marginTop: theme.spacing(0),
    background: theme.palette.error.main,
    color: theme.palette.common.white,
    padding: theme.spacing(1),
    fontSize: '15px',
    letterSpacing: '1px',
    '&:hover': {
      backgroundColor: `${theme.palette.error.light}CE`,
    }
  },
  contentTitleModal: {
    display: 'flex',
    textAlign: 'center'
  },
  titleModal: {
    textTransform: 'uppercase',
    fontSize: '16px',
    fontWeight: 700,
    textAlign: 'center'
  },
  description: {
    fontSize: '14px',
    marginTop: theme.spacing(1),
    textAlign: 'center'
  },
}));

export { useStyles };
