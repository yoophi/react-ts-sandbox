import Pokemon from "./Pokemon";
import React from "react";
import Search from "./Search";
import { useSelector } from "react-redux";
import { RootState } from "../state";

function App() {
  const { pokemon } = useSelector((state: RootState) => state.pokemon);

  return (
    <div>
      <Search />
      <Pokemon pokemon={pokemon} />
    </div>
  );
}

export default App;
