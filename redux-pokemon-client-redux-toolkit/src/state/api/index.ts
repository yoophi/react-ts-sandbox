import axios from "axios";

export async function searchByName(pokemonName: string) {
  return await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
}
