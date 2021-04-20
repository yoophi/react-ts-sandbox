import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchByName } from "../api";

export const searchPokemonByName = createAsyncThunk(
  "pokemon/SEARCH_BY_NAME",
  async (pokemonName: string, thunkAPI) => {
    const response = await searchByName(pokemonName);
    return response.data;
  }
);
