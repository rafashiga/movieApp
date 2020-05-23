import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardSubtitle,
  CardDescription,
  Pagination,
} from './styles';
import { Popular } from '~/models/Popular';
import api from '~/services/api';

interface Props {
  navigation: any;
  route: {
    key: string;
    name: string;
    params: {
      title: string;
      type: string;
    };
  };
}

const List: React.FC<Props> = ({ navigation, route }) => {
  const { title, type } = route.params;
  const [popular, setPopular] = useState<Popular>();

  navigation.setOptions({
    title,
  });

  useEffect(() => {
    const getPopular = async () => {
      const response = await api.get(type);

      setPopular(response.data);
      console.tron.log(response.data);
    };

    getPopular();
  }, []);

  return (
    <Container>
      {popular &&
        popular.results.map((movie) => (
          <Card key={movie.id}>
            <CardImage
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
              }}
            />
            <CardBody>
              <CardTitle>{movie.title}</CardTitle>
              <CardSubtitle>
                Exercitation esse exercitation Lorem ut enim magna minim.
              </CardSubtitle>
              <CardDescription>
                {movie.overview.length > 100
                  ? `${movie.overview.substring(0, 100)} ...`
                  : movie.overview}
              </CardDescription>
            </CardBody>
          </Card>
        ))}
      <Pagination />
    </Container>
  );
};

export default List;
