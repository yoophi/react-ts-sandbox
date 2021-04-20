import { ActionType } from "../action-types";

export type PokemonType = {
  abilities: PokemonAbility[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
};

type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
};

type PokemonSprites = {
  front_default: string;
};

type PokemonStat = {
  base_stat: number;
  stat: { name: string };
};

export interface PokemonFail {
  type: typeof ActionType.POKEMON_FAIL;
}

export interface PokemonLoading {
  type: typeof ActionType.POKEMON_LOADING;
}

export interface PokemonSuccess {
  type: typeof ActionType.POKEMON_SUCCESS;
  payload: PokemonType;
}

export type Action = PokemonLoading | PokemonSuccess | PokemonFail;
