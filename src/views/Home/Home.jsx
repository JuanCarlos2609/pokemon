/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Grid, TextField, Typography } from "@material-ui/core";
import { Storage } from "@material-ui/icons";
import { Pagination } from "@material-ui/lab";
import { useApi } from "../../hooks/useApi";
import { useLoader } from "../../components/Loader";
import { Card } from "../../components/Card/Card";
import { useStyles } from "./HomeStyles";
import { Search } from "@material-ui/icons";

const Home = () => {
  const classes = useStyles();
  const [newData, setNewData] = useState([]);
  const [data, setData] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [page, setpage] = useState(0);
  const { handleShowLoader } = useLoader();

  const [getAllpokemon] = useApi({
    endpoint: "pokemon?limit=100000&offset=0",
    method: "get",
  });

  const getAllData = async () => {
    try {
      const response = await getAllpokemon();
      console.log(response)
      const { results } = response;
      setPokemon(results);
      setNewData(results);
    } catch (error) {}
  };

  useEffect(() => {
    handleShowLoader(true);
    setTimeout(() => {
      getAllData();
      handleShowLoader(false);
    }, 1000);
  }, []);

  const changePage = (event, nextPage) => {
    handleShowLoader(true);

    setTimeout(() => {
      setpage(nextPage - 1);
      window.scrollTo(0, 0);
      handleShowLoader(false);
    }, 1000);
  };

  const handleOnchange = (event) => {
    const keyword = event.target.value;

    if (keyword !== "") {
      const result = pokemon.filter((item) =>
        item.name.toLowerCase().startsWith(keyword.toLowerCase())
      );

      setNewData(result);
    } else {
      setNewData(pokemon);
    }

    setData(keyword);
  };

  return (
    <div className={classes.container}>
      <Grid
        container
        style={{ marginBottom: 20 }}
        className={classes.containerSearch}
      >
        <Grid item>
          <TextField
            type="text"
            id="data"
            name="data"
            value={data}
            onChange={handleOnchange}
            InputProps={{
              startAdornment: <Search />,
            }}
            variant="outlined"
            label="Buscar"
            placeholder="Buscar"
          />
        </Grid>
      </Grid>
      {newData.length === 0 ? (
        <Grid container spacing={3} className={classes.noDataText}>
          <Grid item>
            <Storage/>
          </Grid>
          <Grid item>
            <Typography>No se encontraron coincidencias</Typography>
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={2} className={classes.contentGrid}>
          {newData.slice(page * 20, page * 20 + 20).map((item, index) => (
            <Grid item key={`Card-${item.name}-${item.index}`}>
              <Card data={item} />
            </Grid>
          ))}
        </Grid>
      )}
      <Grid className={classes.contentPagination}>
        <Pagination
          count={Math.ceil(newData.length / 20)}
          page={page + 1}
          onChange={(event, nextPage) => changePage(event, nextPage)}
          className={classes.pagination}
        />
      </Grid>
    </div>
  );
};

export { Home };
