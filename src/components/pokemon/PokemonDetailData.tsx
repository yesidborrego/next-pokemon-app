import { FC, useEffect, useState } from "react";
import { Button, Card, Container, Image, Text } from "@nextui-org/react";
import { IPokemonDetailCardData } from "@/interfaces";
import { isPokemonInFavorites, toggleFavorites } from "@/utilities";
import { showConfetti } from "@/utilities";

export const PokemonDetailData: FC<IPokemonDetailCardData> = ({
  back_default,
  back_shiny,
  front_default,
  front_shiny,
  id,
  image,
  name,
}) => {
  const [isInFavorites, setIsInFavorites] = useState(false);
  useEffect(() => {
    setIsInFavorites(isPokemonInFavorites(id));
  }, [id]);

  const onToggleFavorites = () => {
    toggleFavorites({ id, name, image });
    setIsInFavorites(!isInFavorites);
    if (!isInFavorites) {
      showConfetti();
    }
  };

  return (
    <Card>
      <Card.Header css={{ display: "flex", justifyContent: "space-between" }}>
        <Text h1 transform="capitalize">
          {name}
        </Text>
        <Button
          color="gradient"
          ghost={!isInFavorites}
          onPress={onToggleFavorites}
        >
          {isInFavorites ? "In favorites" : "Save in favorites"}
        </Button>
      </Card.Header>
      <Card.Body>
        <Text size={30}>Sprites:</Text>
        <Container direction="row" display="flex">
          <Image alt={name} height={100} src={front_default} width={100} />
          <Image alt={name} height={100} src={back_default} width={100} />
          <Image alt={name} height={100} src={front_shiny} width={100} />
          <Image alt={name} height={100} src={back_shiny} width={100} />
        </Container>
      </Card.Body>
    </Card>
  );
};
