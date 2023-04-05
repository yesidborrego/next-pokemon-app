import { IPokemonData, IResponsePokemon } from "@/interfaces";
import pokeApi from "./configAxios";

export const getPokemonWithLimits = async (
  limit: number = 151
): Promise<IResponsePokemon> => {
  const { data } = await pokeApi.get<IResponsePokemon>(
    `/pokemon?limit=${limit}`
  );
  return data;
};

export const getPokemonByParam = async (pokemonParam: string) => {
  try {
    const { data } = await pokeApi.get<IPokemonData>(
      `/pokemon/${pokemonParam}`
    );

    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
  } catch (error) {
    return null;
  }
};
