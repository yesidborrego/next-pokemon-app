import { IFavoritesProps } from "@/interfaces";

const toggleFavorites = ({ id, name, image }: IFavoritesProps) => {
  setPokemonFavoriteInLocalStorage(
    isPokemonInFavorites(id)
      ? getPokemonFavoritesFilter(id)
      : addPokemonFavoriteToLocalStorage({ id, name, image })
  );
};

const getPokemonOfLocalStorage = () => {
  let favorites: IFavoritesProps[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  return favorites;
};

const isPokemonInFavorites = (id: number) => {
  if (typeof window === "undefined") return false;
  const favorites: IFavoritesProps[] = getPokemonOfLocalStorage();
  console.log(
    "isPokemon:",
    Boolean(favorites.find((pokemon) => pokemon.id === id))
  );
  return Boolean(favorites.find((pokemon) => pokemon.id === id));
};

const getPokemonFavoritesFilter = (id: number) => {
  const favorites: IFavoritesProps[] = getPokemonOfLocalStorage();
  return favorites.filter((pokemonId) => pokemonId.id !== id);
};

const addPokemonFavoriteToLocalStorage = ({
  id,
  name,
  image,
}: IFavoritesProps) => {
  const favorites: IFavoritesProps[] = getPokemonOfLocalStorage();
  favorites.push({ id, name, image });
  return favorites;
};

const setPokemonFavoriteInLocalStorage = (
  pokemonFavorites: IFavoritesProps[]
) => {
  localStorage.setItem("favorites", JSON.stringify(pokemonFavorites));
};

export { isPokemonInFavorites, getPokemonOfLocalStorage, toggleFavorites };
