import { useSelector } from "react-redux";
import { getPokemonProfile } from "../../store/pokemons/pokemonsState";

const PokemonProfile = () => {
  const pokemonProfile = useSelector(getPokemonProfile);

  return (
    <>
      <h1>Name: {pokemonProfile.name} </h1>
      <br />
      <p>Height: {pokemonProfile.height}</p>
      <p>Weight: {pokemonProfile.weight}</p>
      <p>Moves: </p>
      <ul>
        {pokemonProfile.moves.slice(0, 10).map((move) => {
          return <li key={Math.random()}>{move.move.name}</li>;
        })}
      </ul>
    </>
  );
};

export default PokemonProfile;
