import { createAsyncThunk } from "@reduxjs/toolkit";

// obične fetch funkcije
const fetchPokemons = () => {
  const response = fetch("https://pokeapi.co/api/v2/pokemon").then((response) =>
    response.json()
  );
  return response;
};

const fetchPokemonProfile = (url) => {
  const response = fetch(url).then((response) => response.json());
  return response;
};

// redux akcije
export const fetchPokemonsAction = createAsyncThunk(
  "fetchPokemonsAction",
  async () => {
    const response = await fetchPokemons();
    return response;
  }
);

export const fetchPokemonsProfileAction = createAsyncThunk(
  "fetchPokemonsProfileAction",
  async (url) => {
    const response = await fetchPokemonProfile(url);
    return response;
  }
);

// extra reducer
export const pokemonsStateExtraReducers = (builder) => {
  // fetch pokemons
  builder.addCase(fetchPokemonsAction.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(fetchPokemonsAction.fulfilled, (state, action) => {
    state.pokemons = action.payload.results;
    state.numberOfPokemons = action.payload.count;
    state.loading = false;
  });
  builder.addCase(fetchPokemonsAction.rejected, (state) => {
    state.loading = false;
  });

  // fetch pokemon profile
  builder.addCase(fetchPokemonsProfileAction.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(fetchPokemonsProfileAction.fulfilled, (state, action) => {
    state.loading = false;
    state.pokemonProfile = action.payload;
    state.fetchedIndividual = true;
  });
  builder.addCase(fetchPokemonsProfileAction.rejected, (state) => {
    state.loading = false;
  });
};
