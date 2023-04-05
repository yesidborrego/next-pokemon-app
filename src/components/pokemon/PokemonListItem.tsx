import { FC } from "react";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  id: number;
  name: string;
  img: string;
}

export const PokemonListItem: FC<Props> = ({ id, name, img }) => {
  const router = useRouter();

  const goToPokemonPage = () => {
    router.push(`/name/${name}`);
  };
  return (
    <Grid xs={6} sm={4} md={3} lg={1} key={id}>
      <Card
        isHoverable
        isPressable
        variant="bordered"
        onClick={goToPokemonPage}
      >
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={img} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
