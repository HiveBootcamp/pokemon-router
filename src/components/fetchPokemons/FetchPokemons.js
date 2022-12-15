import { Divider } from "antd";
import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions, getIsLoggedIn } from "../../store/auth/authState";
import {
  getNumberOfPokemons,
  getPokemons,
} from "../../store/pokemons/pokemonsState";
import { fetchPokemonsAction } from "../../store/pokemons/pokemonsStateExtraReducers";
import IndividualPokemon from "./IndividualPokemon";

import styles from "./pokemons.module.css";

const FetchPokemons = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pokemons = useSelector(getPokemons);
  const numberOfPokemons = useSelector(getNumberOfPokemons);
  const isLoggedIn = useSelector(getIsLoggedIn);

  const fetchPokemonsHandler = useCallback(() => {
    dispatch(fetchPokemonsAction());
  }, [dispatch]);

  const logoutHandler = () => {
    dispatch(authActions.logOut());
  };

  useEffect(() => {
    if (isLoggedIn === false) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const memoizedPokemons = useMemo(() => pokemons, [pokemons]);

  return (
    <>
      <button className={styles.button} onClick={fetchPokemonsHandler}>
        Fetch Pokemons!
      </button>
      <h2>There are {numberOfPokemons} Pokemons!</h2>
      <ul className={styles.list}>
        {memoizedPokemons.map((pokemon) => {
          return (
            <div key={pokemon.url}>
              <IndividualPokemon name={pokemon.name} url={pokemon.url} />
              <Divider />
            </div>
          );
        })}
      </ul>
      <button className={styles.button} onClick={logoutHandler}>
        Log Out
      </button>
    </>
  );
};

export default FetchPokemons;
