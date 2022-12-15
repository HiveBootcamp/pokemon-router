import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authState";
import { pokemonReducer } from "./pokemons/pokemonsState";

export const store = configureStore({
  reducer: {
    // auth
    authState: authReducer,
    // fetch
    pokemonsState: pokemonReducer,
  },
});
