import { useStyles } from "./CardStyles";

export const TypePokemon = (type) => {
  const classes = useStyles();

  switch (type) {
    case "bug":
      return classes.rootBug;
    case "water":
      return classes.rootWater;
    case "grass":
      return classes.rootGrass;
    case "fire":
      return classes.rootFire;
    case "normal":
      return classes.rootNormal;
    case "electric":
      return classes.rootElectric;
    case "poison":
      return classes.rootPoison;
    case "ground":
      return classes.rootGround;
    case "fairy":
      return classes.rootFairy;
    case "fighting":
      return classes.rootFighting;
    case "psychic":
      return classes.rootPsychic;
    case "rock":
      return classes.rootRock;
    case "ghost":
      return classes.rootGhost;
    case "ice":
      return classes.rootIce;
    case "dragon":
      return classes.rootDragon;
    case "dark":
      return classes.rootDark;
    case "steel":
      return classes.rootSteel;
    case "flying":
      return classes.rootFlying;

    default:
  }
};


