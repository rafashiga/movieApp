import React, { useState, useEffect } from 'react';
import {
  Container,
  MovieImage,
  MovieTitle,
  MovieRating,
  MovieInfo,
  InfoItem,
  InfoTitle,
  InfoDescription,
  MovieDescription,
  MovieContainer,
  MovieTitleOverview,
  MovieOverview,
} from './styles';
import api from '~/services/api';
import { Movie } from '~/models/Movie';

interface Props {
  navigation: any;
  route: {
    key: string;
    name: string;
    params: {
      movieTitle: string;
      id: number;
    };
  };
}

const Detail: React.FC<Props> = ({ navigation, route }) => {
  const [movie, setMovie] = useState<Movie>();

  navigation.setOptions({
    title: '',
  });

  useEffect(() => {
    const getMovie = async () => {
      const response = await api.get(`movie/${route.params.id}`);

      console.tron.log(response.data);
      setMovie(response.data);
    };

    getMovie();
  }, []);

  return (
    <Container>
      <MovieImage
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`,
        }}
      />
      <MovieTitle>{movie?.title}</MovieTitle>
      <MovieRating>{movie?.vote_average}</MovieRating>
      <MovieInfo>
        <InfoItem>
          <InfoTitle>Genre</InfoTitle>
          <InfoDescription>
            {movie?.genres.length ? movie?.genres[0].name : '?'}
          </InfoDescription>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Language</InfoTitle>
          <InfoDescription>{movie?.original_language}</InfoDescription>
        </InfoItem>
        <InfoItem>
          <InfoTitle>Date</InfoTitle>
          <InfoDescription>
            {movie?.release_date || '0000-00-00'}
          </InfoDescription>
        </InfoItem>
      </MovieInfo>
      {!!movie?.overview && (
        <MovieDescription>
          <MovieContainer>
            <MovieTitleOverview>Description</MovieTitleOverview>
            <MovieOverview>{movie?.overview}</MovieOverview>
          </MovieContainer>
        </MovieDescription>
      )}
    </Container>
  );
};

export default Detail;
