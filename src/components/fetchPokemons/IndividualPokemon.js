import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getFetchedIndividual,
  getPokemonProfile,
} from "../../store/pokemons/pokemonsState";
import { fetchPokemonsProfileAction } from "../../store/pokemons/pokemonsStateExtraReducers";
import styles from "./pokemons.module.css";

const IndividualPokemon = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchedIndividual = useSelector(getFetchedIndividual);
  const pokemonProfile = useSelector(getPokemonProfile);

  const fetchPokemonProfileHandler = (url) => {
    dispatch(fetchPokemonsProfileAction(url));
  };

  useEffect(() => {
    if (fetchedIndividual) {
      navigate(`/profile/${pokemonProfile.id}`);
    }
  }, [fetchedIndividual, navigate, pokemonProfile.id]);

  return (
    <li className={styles.listItem}>
      <p>
        Pokemon name:{" "}
        <span className={styles.listItemTextData}>{props.name}</span>
      </p>
      <p>
        Pokemon URL:{" "}
        {/* <span className={styles.listItemTextData}>{props.url}</span> */}
        <button onClick={() => fetchPokemonProfileHandler(props.url)}>
          {props.url}
        </button>
      </p>
    </li>
  );
};

export default IndividualPokemon;
