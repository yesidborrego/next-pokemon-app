import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import { Layout, PokemonDetails } from "@/components";
import { IPokemonDetails } from "@/interfaces";
import { getPokemonByParam } from "@/service/pokeApi";

const PokemonPage: NextPage<IPokemonDetails> = ({ pokemon }) => {
  return (
    <Layout title={pokemon.name}>
      <PokemonDetails pokemon={pokemon} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemonIds = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemonIds.map((id) => ({ params: { id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const pokemon = await getPokemonByParam(id);

  return {
    props: {
      pokemon: pokemon || [],
    },
  };
};

export default PokemonPage;
