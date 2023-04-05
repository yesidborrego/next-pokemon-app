import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Layout, PokemonDetails } from "@/components";
import { getPokemonByParam, getPokemonWithLimits } from "@/service/pokeApi";
import { IPokemonDetails } from "@/interfaces";

export const PokemonByNamePage: NextPage<IPokemonDetails> = ({ pokemon }) => {
  return (
    <Layout title={pokemon.name}>
      <PokemonDetails pokemon={pokemon} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const data = await getPokemonWithLimits();
  const pokemonNames: string[] = data.results.map((pokemon) => pokemon.name);

  return {
    paths: pokemonNames.map((name: string) => ({ params: { name } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const pokemon = await getPokemonByParam(name.toLocaleLowerCase());
  if (pokemon) {
    return {
      props: {
        pokemon: pokemon || [],
      },
      revalidate: 86400,
    };
  }
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};

export default PokemonByNamePage;
