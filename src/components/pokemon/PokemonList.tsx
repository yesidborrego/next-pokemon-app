import { FC } from "react";
import { Grid } from "@nextui-org/react";
import { Pokemon } from "../../interfaces/pokemonApiResponse";
import { PokemonListItem } from "@/components";

interface Props {
  pokemons: Pokemon[];
}

export const PokemonList: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2}>
      {pokemons.map(({ id, name, img }) => (
        <PokemonListItem id={id} name={name} img={img} key={id} />
      ))}
    </Grid.Container>
  );
};
