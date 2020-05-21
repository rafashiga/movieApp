import React, { useState } from 'react';
import { Container, Form, Label } from './styles';
import TabGenre from '../../components/TabGenre';
import Input from '../../components/Input';
import TabMovies from '../../components/TabMovies';

const Home: React.FC = () => {
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
      <TabMovies title="Hot Movies" />
    </Container>
  );
};

export default Home;
