import { Dispatch } from "react";
import { ActionType } from "../action-types";
import axios from "axios";
import { Action } from "../action";

export const getPokemon = (pokemon: string) => async (
  dispatch: Dispatch<Action>
) => {
  try {
    dispatch({
      type: ActionType.POKEMON_LOADING,
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    dispatch({
      type: ActionType.POKEMON_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ActionType.POKEMON_FAIL,
    });
  }
};
