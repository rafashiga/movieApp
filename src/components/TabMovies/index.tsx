import React from 'react';
import {
  Container,
  Header,
  Title,
  MoreButton,
  ButtonText,
  TabsContainer,
  TabBody,
  TabImage,
  TabItem,
  TabText,
  Rating,
  RatingText,
} from './styles';

interface Props {
  title: string;
  navigation: any;
}

const TabMovies: React.FC<Props> = ({ title, navigation }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <MoreButton onPress={() => navigation.navigate('List', { title })}>
          <ButtonText>more &gt;</ButtonText>
        </MoreButton>
      </Header>
      <TabsContainer>
        <TabItem>
          <TabBody>
            <TabImage />
            <Rating>
              <RatingText>7.2</RatingText>
            </Rating>
          </TabBody>
          <TabText>Spider-man</TabText>
        </TabItem>
        <TabItem>
          <TabBody>
            <TabImage />
            <Rating>
              <RatingText>7.2</RatingText>
            </Rating>
          </TabBody>
          <TabText>OK</TabText>
        </TabItem>
        <TabItem>
          <TabBody>
            <TabImage />
            <Rating>
              <RatingText>7.2</RatingText>
            </Rating>
          </TabBody>
          <TabText>OK</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
};

export default TabMovies;
