import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MediaCard from "../../components/MediaCard";
import { useState } from "react";
import { pokemons } from "../../api/pokemons";
import React from "react";
import { Pagination } from "@mui/material";

function Home() {
  const [page, setPage] = React.useState(1);

  const [count, setCount] = React.useState(1);

  const [allPokemons, setAllPokemons] = useState([]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  React.useEffect(() => {
    pokemons
      .getAll(page)
      .then((r) => {
        setAllPokemons(r.data.data.results);
        // setCount(r.data.pokemons.totalPages);
        console.log(r);
        // console.log(r.data.data.results);
      })
      .catch((error) => {
        console.error("Error solicitando los pokemons", error);
      });
  }, [page]);
  return (
    <>
      <Grid direction="row" container spacing={4} margin={2}>
        {/* Itera sobre el estado local de los pokemons y renderiza un MediaCard por cada uno */}
        {allPokemons.map((pokemon) => (
          <Grid item key={pokemon.id} xs={3} sx={{ backgroundColor: "purple" }}>
            <MediaCard name={pokemon.name} />
          </Grid>
        ))}
        <Pagination
          count={count}
          page={page}
          color="primary"
          sx={{ margin: 2 }}
          onChange={handleChange}
        />
      </Grid>
    </>
  );
}

export default Home;
