import { Container, Image, Text } from "@nextui-org/react";

export const NoFavorites = () => {
  return (
    <Container
      css={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        justifyContent: "center",
      }}
    >
      <Text h1>There isn&apos;t favorites</Text>
      <Image
        alt="pokemon_logo"
        css={{ opacity: 0.2 }}
        height={250}
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        title="ditto"
        width={250}
      />
    </Container>
  );
};
