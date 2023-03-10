import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  containerAction: {
    padding: theme.spacing(2),
  },
  contentMedia: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    height: theme.spacing(15),
  },
  rootBug: {
    backgroundColor: "#aedf78",
    borderRadius: "10px",
  },
  rootWater: {
    backgroundColor: "#43ccff",
    borderRadius: "10px",
  },
  rootGrass: {
    backgroundColor: "#00ca91",
    borderRadius: "10px",
  },
  rootFire: {
    backgroundColor: "#e95c40",
    borderRadius: "10px",
  },
  rootNormal: {
    backgroundColor: "#a5a5a5",
    borderRadius: "10px",
  },
  rootElectric: {
    backgroundColor: "#F8D030",
    borderRadius: "10px",
  },
  rootPoison: {
    backgroundColor: "#B058A0",
    borderRadius: "10px",
  },
  rootGround: {
    backgroundColor: "#E9D6A4",
    borderRadius: "10px",
  },
  rootFairy: {
    backgroundColor: "#E79FE7",
    borderRadius: "10px",
  },
  rootFighting: {
    backgroundColor: "#A05038",
    borderRadius: "10px",
  },
  rootPsychic: {
    backgroundColor: "#F870A0",
    borderRadius: "10px",
  },
  rootRock: {
    backgroundColor: "#B8A058",
    borderRadius: "10px",
  },
  rootGhost: {
    backgroundColor: "#6060B0",
    borderRadius: "10px",
  },
  rootIce: {
    backgroundColor: "#58C8E0",
    borderRadius: "10px",
  },
  rootDragon: {
    backgroundColor: "#7860E0",
    borderRadius: "10px",
  },
  rootDark: {
    backgroundColor: "#7A5848",
    borderRadius: "10px",
  },
  rootSteel: {
    backgroundColor: "#A8A8C0",
    borderRadius: "10px",
  },
  rootFlying: {
    backgroundColor: "#98A8F0",
    borderRadius: "10px",
  },
  namePokemon: {
    fontSize: "18px",
    color: theme.palette.common.white,
    letterSpacing: "1px",
    fontWeight: 700,
    textTransform: "capitalize",
    textAlign: "center",
    marginBottom: theme.spacing(1),
  },
  containerTypes: {
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5),
    display: "flex",
    justifyContent: "space-around",
  },
  type: {
    width: "30%",
    color: "white",
    border: "2px solid",
    borderRadius: "12px",
    textAlign: "center",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandIcon: {
    color: theme.palette.common.black,
    width: theme.spacing(3.5),
    height: theme.spacing(3.5),
    marginTop: theme.spacing(-1)
  },
  titleText: {
    fontSize: '13.5px',
    color: theme.palette.common.white,
    letterSpacing: '1px',
    fontWeight: 600
  },
  textList: {
    fontSize: '13.5px',
    letterSpacing: '1px',
    color: theme.palette.common.white
  },
  infoText: {
    fontSize: '13px',
    color: theme.palette.common.white,
    letterSpacing: '0.8px'
  },
  titleModal: {
    fontSize: '18px',
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  bodyModal: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(2)
  },
  nameEvolution: {
    fontSize: '16px',
    color: theme.palette.common.black,
    fontWeight: 600,
    letterSpacing: '1px',
    textTransform: 'capitalize'
  }
}));

export { useStyles };
