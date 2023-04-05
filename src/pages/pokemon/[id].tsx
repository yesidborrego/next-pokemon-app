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
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const pokemon = await getPokemonByParam(id);
  if (pokemon) {
    return {
      props: {
        pokemon: pokemon || [],
      },
      revalidate: true,
    };
  }
  return {
    redirect: {
      destination: "/",
      permanent: false,
      //* permanent: true = la redirección a otra página lo elimina del indice, significa que no esa página nunca más será accedida
      //* permanent: false = significa que esa página puede ser accedida en un futuro.
    },
  };
};

export default PokemonPage;
