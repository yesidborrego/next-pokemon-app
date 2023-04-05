import { FC } from "react";
import { Card, Grid } from "@nextui-org/react";
import { IFavoriteProps } from "@/interfaces";

export const FavoriteCard: FC<IFavoriteProps> = ({
  name,
  image,
  onGoToPokemon,
}) => {
  return (
    <Grid xs={6} sm={4} md={3} lg={1}>
      <Card
        isHoverable
        isPressable
        css={{ padding: 10 }}
        onPress={() => onGoToPokemon(name)}
      >
        <Card.Image src={image} height={140} width={140} />
      </Card>
    </Grid>
  );
};
