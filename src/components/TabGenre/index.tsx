import React from 'react';
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

const TabGenre: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Best Genre</Title>
        <MoreButton>
          <ButtonText>more &gt;</ButtonText>
        </MoreButton>
      </Header>
      <TabsContainer>
        <TabItem>
          <TabText>OK</TabText>
        </TabItem>
        <TabItem>
          <TabText>OK</TabText>
        </TabItem>
        <TabItem>
          <TabText>OK</TabText>
        </TabItem>
        <TabItem>
          <TabText>OK</TabText>
        </TabItem>
        <TabItem>
          <TabText>OK</TabText>
        </TabItem>
        <TabItem>
          <TabText>OK</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
};

export default TabGenre;
