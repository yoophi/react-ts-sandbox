import { combineReducers } from "redux";
import pokemonReducer from "./PokemonReducer";

const RootReducer = combineReducers({
  pokemon: pokemonReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
