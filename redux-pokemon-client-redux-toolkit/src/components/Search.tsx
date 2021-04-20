import React, { ChangeEvent, useState } from "react";
import { actionCreators } from "../state";
import { useAppDispatch } from "../hooks";

const Search = () => {
  const dispatch = useAppDispatch();
  const [pokemonName, setPokemonName] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPokemonName(e.target.value);

  const handleSubmit = () => {
    dispatch(actionCreators.searchPokemonByName(pokemonName));
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default Search;
