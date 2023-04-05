import { FC } from "react";
import { Card } from "@nextui-org/react";
import { IPokemonDetailCardImage } from "@/interfaces";

export const PokemonDetailImg: FC<IPokemonDetailCardImage> = ({
  name,
  srcImg,
}) => {
  return (
    <Card css={{ padding: "30px" }}>
      <Card.Body>
        <Card.Image alt={name} height={200} src={srcImg} width="100%" />
      </Card.Body>
    </Card>
  );
};
