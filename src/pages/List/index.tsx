import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
  Loading,
} from './styles';
import { Result } from '~/models/Result';
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
  const [loading, setLoading] = useState<boolean>(false);
  const [popular, setPopular] = useState<Popular>();
  const [results, setResults] = useState<Result[]>([]);
  const [page, setPage] = useState<number>(1);

  navigation.setOptions({
    title,
  });

  useEffect(() => {
    const getMovies = async () => {
      setLoading(true);
      const response = await api.get(`movie/${type}`, {
        params: {
          page,
        },
      });

      setLoading(false);

      setResults([...results, ...response.data.results]);
    };

    getMovies();
  }, [page]);

  const handlePressCard = (id: number) => {
    navigation.navigate('Detail', { id });
  };

  const renderItem = ({ item }) => (
    <CardPress key={item.id} onPress={() => handlePressCard(item.id)}>
      <Card>
        <CardImage
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          }}
        />
        <CardBody>
          <CardTitle>
            {item.title.length > 15
              ? `${item.title.substring(0, 14)}...`
              : item.title}
          </CardTitle>
          <CardSubtitle>
            <Icon name="star" size={18} color="#f7b100" />
            <CardSubtitleText>{item.vote_average}</CardSubtitleText>
          </CardSubtitle>
          <CardDescription>
            {item.overview.length > 100
              ? `${item.overview.substring(0, 100)} ...`
              : item.overview}
          </CardDescription>
        </CardBody>
      </Card>
    </CardPress>
  );

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <Loading>
        <ActivityIndicator />
      </Loading>
    );
  };

  return (
    <Container>
      {results && (
        <FlatList
          data={results}
          renderItem={renderItem}
          onEndReached={() => setPage(page + 1)}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
        />
      )}
    </Container>
  );
};

export default List;
