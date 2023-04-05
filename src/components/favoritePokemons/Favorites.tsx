import { FC, useEffect, useState } from "react";
import { Grid } from "@nextui-org/react";
import { FavoriteCard, NoFavorites } from "@/components";
import { getPokemonOfLocalStorage } from "@/utilities/toggleFavorites";
import { useRouter } from "next/router";
import { IFavoritesProps } from "@/interfaces";

export const Favorites: FC = () => {
  const [pokemonsInFavorites, setPokemonsInFavorites] = useState<
    IFavoritesProps[]
  >([]);
  const router = useRouter();

  const onGoToPokemon = (name: string) => {
    router.push(`/name/${name}`);
  };

  useEffect(() => {
    setPokemonsInFavorites(getPokemonOfLocalStorage());
  }, []);

  return (
    <>
      {pokemonsInFavorites.length ? (
        <Grid.Container gap={2} direction="row">
          {pokemonsInFavorites.map(({ id, name, image }) => (
            <FavoriteCard
              name={name}
              image={image}
              key={id}
              onGoToPokemon={onGoToPokemon}
            />
          ))}
        </Grid.Container>
      ) : (
        <NoFavorites />
      )}
    </>
  );
};
