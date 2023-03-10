/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Typography } from "@material-ui/core";
import { useState } from "react";
import { useApi } from "../../../hooks/useApi";
import { useLoader } from "../../Loader/hooks/useLoader";
import { useModal } from "../../Modal/hooks/useModal";
import { useStyles } from "../CardStyles";

export const useHelper = ({ data }) => {
  const classes = useStyles();
  const [information, setInformation] = useState({});
  const [abilities, setAbilities] = useState([]);
  const [types, setTypes] = useState([]);
  const [moves, setMoves] = useState([]);
  const [descriptionText, setDescriptionText] = useState("");
  const { handleShowLoader } = useLoader();
  const { handleOpenModal } = useModal();

  const [pokemonData] = useApi({
    endpoint: `/pokemon/${data.name}/`,
    method: "get",
  });

  const [pokeSpecies] = useApi({
    endpoint: "/pokemon-species",
    method: "get",
  });

  const [pokeEvolutions] = useApi({
    endpoint: "/evolution-chain",
    method: "get",
  });

  const handleGetInfoPokemon = async () => {
    try {
      const response = await pokemonData();
      setInformation(response);
      setAbilities(response.abilities);
      setTypes(response.types);
      setMoves(response.moves);

      handleSpecies(response.id);
    } catch (error) {}
  };

  const handleSpecies = async (id) => {
    const response = await pokeSpecies({
      urlParams: id,
    });

    setDescriptionText(response.flavor_text_entries[26]?.flavor_text);
  };

  const handlePokeSpecies = async () => {
    try {
      const response = await pokeSpecies({
        urlParams: information.species?.url.split("/")[6],
      });
      const evolutions = response.evolution_chain?.url;
      const responseEvolution = await pokeEvolutions({
        urlParams: evolutions.split("/")[6],
      });
      const evolution = responseEvolution.chain;
      const nameSpecies = evolution.species.name;

      console.log('HOLA', response, responseEvolution)

      handleShowLoader(true);

      setTimeout(() => {
        handleOpenModal({
          title: (
            <Typography className={classes.titleModal}>
              Evolucion de {data.name}
            </Typography>
          ),
          body: (
            <Grid className={classes.bodyModal}>
              <Typography className={classes.nameEvolution}>
                {nameSpecies === data.name ? evolution.evolves_to[0]?.species.name : evolution.evolves_to[0]?.evolves_to[0]?.species.name}
              </Typography>
            </Grid>
          ),
          configProps: {
            maxWidth: "md",
          },
        });
        handleShowLoader(false);
      }, 1000);
    } catch (error) {}
  };

  return {
    handleGetInfoPokemon,
    handleSpecies,
    handlePokeSpecies,
    descriptionText,
    information,
    abilities,
    types,
    moves,
  };
};
