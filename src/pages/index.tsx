import { GetStaticProps, NextPage } from "next";
import { getPokemonWithLimits } from "@/service/pokeApi";
import { Layout, PokemonList } from "@/components";
import { Pokemon } from "@/interfaces";

const HomePage: NextPage<{ pokemons: Pokemon[] }> = ({ pokemons }) => {
  return (
    <>
      <Layout title="List">
        <PokemonList pokemons={pokemons} />
      </Layout>
    </>
  );
};

//* getStaticProps: Son propiedades estáticas que son generadas a la hora de construccion de
//* de la aplicacion (build)
//* "getStaticProps" en "dev" se llama cada vez que hacemos una solicitud a esa página, pero
//* cuando se genera el build de producción sólo se ejecuta ahí y luego ya no se vuelve a
//* llamar cuando la aplicación ya no está en producción, solo es una única vez cuando
//* estamos generando el build de la aplicación
//* getStaticProps -> sólo corre del lado del servidor

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await getPokemonWithLimits();
  const pokemons: Pokemon[] = data.results.map((pokemon, index) => {
    return {
      url: pokemon.url,
      name: pokemon.name,
      id: index + 1,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        index + 1
      }.svg`,
    };
  });

  return {
    props: {
      pokemons: pokemons || [],
    },
  };
};

export default HomePage;
