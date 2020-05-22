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

const List: React.FC = () => {
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
    </Container>
  );
};

export default List;
