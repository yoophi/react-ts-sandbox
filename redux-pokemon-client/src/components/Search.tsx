import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemon } from "../state/action-creators";

const Search = () => {
  const dispatch = useDispatch();
  const [pokemonName, setPokemonName] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPokemonName(e.target.value);

  const handleSubmit = () => {
    dispatch(getPokemon(pokemonName));
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default Search;
