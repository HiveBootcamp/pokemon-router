import { createSlice } from "@reduxjs/toolkit";
import { pokemonsStateExtraReducers } from "./pokemonsStateExtraReducers";

const pokemonsState = createSlice({
  name: "pokemonsState",
  initialState: {
    pokemons: [],
    numberOfPokemons: 0,
    pokemonProfile: {},
    loading: false,
    fetchedIndividual: false,
  },
  reducers: {},
  extraReducers: pokemonsStateExtraReducers,
});

// selectors
export const getPokemons = (state) => {
  return state.pokemonsState.pokemons;
};

export const getNumberOfPokemons = (state) => {
  return state.pokemonsState.numberOfPokemons;
};

export const getPokemonProfile = (state) => {
  return state.pokemonsState.pokemonProfile;
};

export const getLoading = (state) => {
  return state.pokemonsState.loading;
};

export const getFetchedIndividual = (state) => {
  return state.pokemonsState.fetchedIndividual;
};

export const pokemonReducer = pokemonsState.reducer;
export const pokemonActions = pokemonsState.actions;
