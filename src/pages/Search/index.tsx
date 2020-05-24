import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Form,
  Label,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardSubtitle,
  CardSubtitleText,
  CardPress,
  CardDescription,
  MessageError,
  Loading,
} from './styles';
import api from '~/services/api';
import { Result } from '~/models/Result';
import Input from '~/components/Input';

interface Props {
  navigation: any;
  route: {
    key: string;
    name: string;
    params: {
      title: string;
      search: string;
    };
  };
}

const SearchPage: React.FC<Props> = ({ navigation, route }) => {
  // const [searchText, setSearchText] = useState<string>(route.params.search);
  // const [search, setSearch] = useState<Search>();
  const [results, setResults] = useState<Result[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>();

  navigation.setOptions({
    title: 'search',
  });

  useEffect(() => {
    const getSearch = async () => {
      setLoading(true);
      const response = await api.get('search/movie', {
        params: {
          query: route.params.search,
          page,
        },
      });

      setLoading(false);

      if (results.length > 0) {
        setResults([...results, ...response.data.results]);
      } else {
        setResults(response.data.results);
      }

      setError(false);
    };

    getSearch().catch(() => {
      setError(true);
    });
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
      {/* <Form>
        <Input
          icon="search"
          placeholder="search movies"
          autoCapitalize="none"
          value={searchText}
          onChangeText={setSearchText}
        />
      </Form> */}
      {loading && results.length === 0 && (
        <MessageError>Loading ...</MessageError>
      )}
      {results.length > 0 && !error && (
        <FlatList
          data={results}
          renderItem={renderItem}
          onEndReached={() => setPage(page + 1)}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
        />
      )}
      {!loading && (error || results.length === 0) && (
        <MessageError>Search not found</MessageError>
      )}
    </Container>
  );
};

export default SearchPage;
