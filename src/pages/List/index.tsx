import React, { useState, useEffect } from 'react';
import {
  Container,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardSubtitle,
  CardSubtitleText,
  CardPress,
  CardDescription,
  Pagination,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
      const response = await api.get(`movie/${type}`);

      setPopular(response.data);
      console.tron.log(response.data);
    };

    getPopular();
  }, [type]);

  const handlePressCard = (id: number) => {
    navigation.navigate('Detail', { id });
  };

  return (
    <Container>
      {popular &&
        popular.results.map((movie) => (
          <CardPress key={movie.id} onPress={() => handlePressCard(movie.id)}>
            <Card>
              <CardImage
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                }}
              />
              <CardBody>
                <CardTitle>
                  {movie.title.length > 15
                    ? `${movie.title.substring(0, 14)}...`
                    : movie.title}
                </CardTitle>
                <CardSubtitle>
                  <Icon name="star" size={18} color="#f7b100" />
                  <CardSubtitleText>{movie.vote_average}</CardSubtitleText>
                </CardSubtitle>
                <CardDescription>
                  {movie.overview.length > 100
                    ? `${movie.overview.substring(0, 100)} ...`
                    : movie.overview}
                </CardDescription>
              </CardBody>
            </Card>
          </CardPress>
        ))}
      <Pagination />
    </Container>
  );
};

export default List;
