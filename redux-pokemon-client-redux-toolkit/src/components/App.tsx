import Pokemon from "./Pokemon";
import React from "react";
import Search from "./Search";
import { useAppSelector } from "../hooks";

function App() {
  const { pokemon } = useAppSelector((state) => state.pokemon);

  return (
    <div>
      <Search />
      <Pokemon pokemon={pokemon} />
    </div>
  );
}

export default App;
