import React from 'react';
import {
  Container,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardSubtitle,
  CardDescription,
} from './styles';

interface Props {
  navigation: any;
  route: {
    key: string;
    name: string;
    params: {
      title: string;
    };
  };
}

const List: React.FC<Props> = ({ navigation, route }) => {
  navigation.setOptions({
    title: route.params.title,
  });

  return (
    <Container>
      <Card>
        <CardImage />
        <CardBody>
          <CardTitle>Filme</CardTitle>
          <CardSubtitle>
            Exercitation esse exercitation Lorem ut enim magna minim.
          </CardSubtitle>
          <CardDescription>
            Minim in officia ut commodo quis et. Est aliqua qui irure dolor do
            aute Lorem officia nostrud. Incididunt.
          </CardDescription>
        </CardBody>
      </Card>

      <Card>
        <CardImage />
        <CardBody>
          <CardTitle>Filme</CardTitle>
          <CardSubtitle>
            Exercitation esse exercitation Lorem ut enim magna minim.
          </CardSubtitle>
          <CardDescription>
            Minim in officia ut commodo quis et. Est aliqua qui irure dolor do
            aute Lorem officia nostrud. Incididunt.
          </CardDescription>
        </CardBody>
      </Card>
    </Container>
  );
};

export default List;
