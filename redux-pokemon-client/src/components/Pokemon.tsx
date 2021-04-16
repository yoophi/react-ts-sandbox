import React from "react";
import { PokemonType } from "../state/action";
interface IPokemonProps {
  pokemon?: PokemonType;
}
const Pokemon: React.FC<IPokemonProps> = ({ pokemon }) => {
  return (
    <>
      <div>Pokemon</div>
      {pokemon && (
        <div>
          <img src={pokemon.sprites.front_default} alt="" />
          {pokemon.abilities.map((ability) => {
            return <p>{ability.ability.name}</p>;
          })}
        </div>
      )}
    </>
  );
};

export default Pokemon;
