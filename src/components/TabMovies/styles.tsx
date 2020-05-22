import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin-bottom: 30px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 20px;
`;

export const Title = styled.Text`
  color: #333;
  font-size: 20px;
  font-weight: bold;
`;

export const MoreButton = styled(RectButton)`
  margin-top: 5px;
  color: rgb(103, 58, 183);
`;

export const ButtonText = styled.Text`
  color: rgb(103, 58, 183);
  font-size: 16px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
  showsHorizontalScrollIndicator: false,
})``;

export const TabItem = styled.View`
  margin-left: 10px;
  margin-right: 10px;
  position: relative;
`;

export const TabBody = styled.View``;

export const TabImage = styled.View.attrs({
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.39,
  shadowRadius: 8.3,
  elevation: 8,
  shadowColor: '#000',
})`
  width: 150px;
  height: 195px;
  background: rgb(103, 58, 183);
  border-radius: 10px;
  margin-bottom: 3px;
`;

export const Rating = styled.View.attrs({
  elevation: 8,
})`
  position: absolute;
  bottom: 2px;
  padding: 8px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  background: #f7b100;
`;

export const RatingText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const TabText = styled.Text`
  color: #333;
  font-size: 18px;
`;
