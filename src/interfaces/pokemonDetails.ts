import { IPokemonData } from "./pokemonData";

export interface IPokemonDetails {
  pokemon: IPokemonData;
}

export interface IPokemonDetailCardImage {
  name: string;
  srcImg: string;
}

export interface IPokemonDetailCardData {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  id: number;
  image: string;
  name: string;
}
