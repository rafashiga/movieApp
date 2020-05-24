import React from 'react';
import { Result } from '~/models/Result';
import {
  Container,
  Header,
  Title,
  MoreButton,
  ButtonText,
  TabsContainer,
  TabBody,
  TabButton,
  TabImage,
  TabItem,
  TabText,
  Rating,
  RatingText,
} from './styles';

interface Props {
  title: string;
  navigation: any;
  data: Result[];
  type: string;
}

const TabMovies: React.FC<Props> = ({ title, navigation, type, data }) => {
  const handleImagePress = (id: number) => {
    navigation.navigate('Detail', { id });
  };

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <MoreButton
          onPress={() => navigation.navigate('List', { title, type })}>
          <ButtonText>more &gt;</ButtonText>
        </MoreButton>
      </Header>
      <TabsContainer>
        {data &&
          data.map((movie) => (
            <TabItem key={movie.id}>
              <TabBody>
                <TabButton onPress={() => handleImagePress(movie.id)}>
                  <TabImage
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                    }}
                  />
                </TabButton>
                <Rating>
                  <RatingText>{movie.vote_average}</RatingText>
                </Rating>
              </TabBody>
              <TabText>
                {movie.title.length > 10
                  ? `${movie.title.substring(0, 10)} ...`
                  : movie.title}
              </TabText>
            </TabItem>
          ))}
      </TabsContainer>
    </Container>
  );
};

export default TabMovies;
