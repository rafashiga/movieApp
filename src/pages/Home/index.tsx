import React, { useState, useEffect } from 'react';
import { Container, Form, Label } from './styles';
import TabGenre from '~/components/TabGenre';
import Input from '~/components/Input';
import TabMovies from '~/components/TabMovies';
import api from '~/services/api';
import { Popular } from '~/models/Popular';

interface Props {
  navigation: any;
}

const Home: React.FC<Props> = ({ navigation }) => {
  const [search, setSearch] = useState<string>('');
  const [popular, setPopular] = useState<Popular>();

  useEffect(() => {
    const getPopular = async () => {
      const response = await api.get('movie/popular');

      setPopular(response.data);
      console.tron.log(response.data);
    };

    getPopular();
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
      <TabGenre />
      <TabMovies title="Hot Movies" data={popular} navigation={navigation} />
    </Container>
  );
};

export default Home;
