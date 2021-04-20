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
