import React, { useState } from 'react';
import { Container, Form, Label } from './styles';
import TabGenre from '../../components/TabGenre';
import Input from '../../components/Input';
import TabMovies from '../../components/TabMovies';

interface Props {
  navigation: any;
}

const Home: React.FC<Props> = ({ navigation }) => {
  const [search, setSearch] = useState<string>('');

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
        />
      </Form>
      <TabGenre />
      <TabMovies title="Hot Movies" navigation={navigation} />
    </Container>
  );
};

export default Home;
