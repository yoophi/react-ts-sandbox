import { ActionType } from "../action-types";
import { Action, PokemonType } from "../action";

interface IDefaultState {
  loading: boolean;
  pokemon?: PokemonType;
}

const defaultState: IDefaultState = {
  loading: false,
};

const pokemonReducer = (
  state: IDefaultState = defaultState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.POKEMON_LOADING:
      return {
        loading: true,
      };
    case ActionType.POKEMON_SUCCESS:
      return {
        loading: false,
        pokemon: action.payload,
      };
    case ActionType.POKEMON_FAIL:
      return {
        loading: false,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
