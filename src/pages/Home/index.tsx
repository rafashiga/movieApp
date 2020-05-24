import React, { useState, useEffect } from 'react';
import { Container, Form, Label } from './styles';
import TabGenre from '~/components/TabGenre';
import Input from '~/components/Input';
import TabMovies from '~/components/TabMovies';
import api from '~/services/api';
import { Popular } from '~/models/Popular';
import { Upcoming } from '~/models/Upcoming';
import { Genres } from '../../models/Genres';

interface Props {
  navigation: any;
}

const Home: React.FC<Props> = ({ navigation }) => {
  const [search, setSearch] = useState<string>('');
  const [popular, setPopular] = useState<Popular>();
  const [genres, setGenres] = useState<Genres>();
  const [upcoming, setUpcoming] = useState<Upcoming>();

  useEffect(() => {
    const getPopular = async () => {
      const response = await api.get('movie/popular');

      setPopular(response.data);
    };

    const getUpcoming = async () => {
      const response = await api.get('movie/upcoming');

      setUpcoming(response.data);
    };

    const getGenres = async () => {
      const response = await api.get('genre/movie/list');

      setGenres(response.data);
    };

    getPopular();
    getUpcoming();
    getGenres();
  }, []);

  const handleSearch = async () => {
    navigation.navigate('SearchPage', { search });
  };

  return (
    <Container>
      <Form>
        <Label>Search</Label>
        <Input
          icon="search"
          placeholder="search movies"
          autoCapitalize="none"
          value={search}
          onChangeText={setSearch}
          onSubmitEditing={handleSearch}
        />
      </Form>
      <TabGenre data={genres} />
      <TabMovies
        title="Hot Movies"
        data={popular?.results}
        type="popular"
        navigation={navigation}
      />
      <TabMovies
        title="Upcoming"
        data={upcoming?.results}
        type="upcoming"
        navigation={navigation}
      />
    </Container>
  );
};

export default Home;
