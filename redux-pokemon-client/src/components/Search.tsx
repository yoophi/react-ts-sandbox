import React, { ChangeEvent, useState } from "react";

const Search = () => {
  const [pokemonName, setPokemonName] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPokemonName(e.target.value);
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button>Search</button>
    </div>
  );
};

export default Search;
