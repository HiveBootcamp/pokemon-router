import LoginForm from "./components/login/LoginForm";
import FetchPokemons from "./components/fetchPokemons/FetchPokemons";
import PokemonProfile from "./components/fetchPokemons/PokemonProfile";

import styles from "./App.module.css";
import { useSelector } from "react-redux";
import { getLoading } from "./store/pokemons/pokemonsState";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

function App() {
  const loading = useSelector(getLoading);

  return (
    <div className={styles.container}>
      <h1 className={styles.containerTitle}>
        HiveTech Pokemon with Redux & Redux Toolkit & Router
      </h1>
      {loading && <h1>Loading......</h1>}

      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/fetch" element={<FetchPokemons />} />
        <Route path="/profile/:id" element={<PokemonProfile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {/* {!isLoggedIn && !loading && <LoginForm onFinish={loginHandler} />}
      {isLoggedIn && !loading && Object.keys(pokemonProfile).length === 0 && (
        <FetchPokemons />
      )}
      {isLoggedIn && !loading && Object.keys(pokemonProfile).length > 0 && (
        <PokemonProfile
          name={pokemonProfile.name}
          height={pokemonProfile.height}
          weight={pokemonProfile.weight}
          moves={pokemonProfile.moves}
        />
      )} */}
    </div>
  );
}

export default App;
