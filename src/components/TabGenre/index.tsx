import React from 'react';
import { Genres, Genre } from '../../models/Genres';
import {
  Container,
  Header,
  Title,
  MoreButton,
  ButtonText,
  TabsContainer,
  TabItem,
  TabText,
} from './styles';

interface Props {
  data: Genres;
}

const TabGenre: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <Header>
        <Title>Best Genre</Title>
        <MoreButton>
          <ButtonText>more &gt;</ButtonText>
        </MoreButton>
      </Header>
      <TabsContainer>
        {data?.genres.map((genre: Genre) => (
          <TabItem key={genre.id}>
            <TabText>{genre.name}</TabText>
          </TabItem>
        ))}
      </TabsContainer>
    </Container>
  );
};

export default TabGenre;
