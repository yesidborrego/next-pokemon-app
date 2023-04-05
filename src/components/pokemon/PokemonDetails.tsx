import { FC } from "react";
import { Grid } from "@nextui-org/react";
import { PokemonDetailData, PokemonDetailImg } from "@/components";
import { IPokemonDetails } from "@/interfaces";

export const PokemonDetails: FC<IPokemonDetails> = ({ pokemon }) => {
  return (
    <Grid.Container css={{ marginTop: "30px" }} gap={2}>
      <Grid xs={12} sm={4}>
        <PokemonDetailImg
          name={pokemon.name}
          srcImg={
            pokemon.sprites.other?.dream_world.front_default || "/no-image.png"
          }
        />
      </Grid>
      <Grid xs={12} sm={8}>
        <PokemonDetailData
          back_default={pokemon.sprites.back_default}
          back_shiny={pokemon.sprites.back_shiny}
          front_default={pokemon.sprites.front_default}
          front_shiny={pokemon.sprites.front_shiny}
          image={
            pokemon.sprites.other?.dream_world.front_default || "/no-image.png"
          }
          id={pokemon.id}
          name={pokemon.name}
        />
      </Grid>
    </Grid.Container>
  );
};
