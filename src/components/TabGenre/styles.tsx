import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin-top: 10px;
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
})`
  margin-bottom: 20px;
`;

export const TabItem = styled.View`
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 65px;
  margin-left: 10px;
  background: rgb(103, 58, 183);
  border-radius: 10px;
`;

export const TabText = styled.Text`
  color: #fff;
`;
