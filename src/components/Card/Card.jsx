/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  Card as MaterialCard,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Collapse,
  Button,
} from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";
import { useStyles } from "./CardStyles";
import { TypePokemon } from "./utils";
import { useLoader } from "../Loader/hooks/useLoader";
import { useHelper } from "./hooks/useHelper";

const Card = ({ data }) => {
  const classes = useStyles();
  const { handleShowLoader } = useLoader();
  const [expanded, setExpanded] = useState(false);
  const {
    handleGetInfoPokemon,
    handleSpecies,
    handlePokeSpecies,
    descriptionText,
    information,
    abilities,
    types,
    moves,
  } = useHelper({ data });

  useEffect(() => {
    handleGetInfoPokemon();
    handleSpecies();
  }, []);

  const handleExpanded = () => {
    handleShowLoader(true);

    setTimeout(() => {
      setExpanded(!expanded);
      handleShowLoader(false);
    }, 1000);
  };

  const Type = (type) => {
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

  return (
    <MaterialCard
      style={{ width: "300px" }}
      className={TypePokemon(types[0]?.type.name)}
    >
      <CardActionArea
        className={classes.containerAction}
        onClick={() => handlePokeSpecies()}
      >
        <CardMedia className={classes.contentMedia}>
          <img
            src={information.sprites?.other.dream_world.front_default}
            alt="poke-icon"
          />
        </CardMedia>

        <Typography className={classes.namePokemon}>
          {data.name} #{information.id}
        </Typography>
        <Grid container spacing={1} className={classes.containerTypes}>
          {types.map((itemTypes) => (
            <Grid
              item
              className={[classes.type, Type(`${itemTypes.type.name}`)]}
            >
              {itemTypes.type.name}
            </Grid>
          ))}
        </Grid>
      </CardActionArea>
      <CardContent>
        <Typography className={classes.infoText} style={{ marginBottom: 10 }}>
          {descriptionText}
        </Typography>
        <Typography className={classes.titleText} style={{ display: "flex" }}>
          Peso: &nbsp;
          <Typography className={classes.infoText}>
            {information.weight}
          </Typography>
        </Typography>
        <Typography className={classes.titleText} style={{ display: "flex" }}>
          Altura: &nbsp;
          <Typography className={classes.infoText}>
            {information.height}
          </Typography>
        </Typography>
        <Typography className={classes.titleText} style={{ display: "flex" }}>
          Experiencia base: &nbsp;
          <Typography className={classes.infoText}>
            {information.base_experience}
          </Typography>
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          className={classes.expand}
          onClick={() => handleExpanded()}
          aria-expanded={expanded}
          aria-label="show more"
          endIcon={
            expanded ? (
              <ExpandLess className={classes.expandIcon} />
            ) : (
              <ExpandMore className={classes.expandIcon} />
            )
          }
        >
          <Typography className={classes.namePokemon}>
            Más Información
          </Typography>
        </Button>
      </CardActions>

      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
        style={{ padding: 10 }}
      >
        <CardContent>
          <Typography paragraph className={classes.titleText}>
            Habilidades:
          </Typography>
          <ul>
            {abilities.map((itemAbilities) => (
              <li
                key={`List-${itemAbilities.ability.name}`}
                className={classes.textList}
              >
                {itemAbilities.ability.name}
              </li>
            ))}
          </ul>

          <Typography paragraph className={classes.titleText}>
            Ataques:
          </Typography>
          <ul>
            {moves.map((itemMoves) => (
              <li
                key={`List-${itemMoves.move.name}`}
                className={classes.textList}
              >
                {itemMoves.move.name}
              </li>
            ))}
          </ul>
        </CardContent>
      </Collapse>
    </MaterialCard>
  );
};

export { Card };
