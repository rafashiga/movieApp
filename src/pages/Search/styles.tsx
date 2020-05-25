import styled from 'styled-components/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export const Container = styled.View`
  background: #fff;
  height: 100%;
`;

export const Form = styled.View`
  margin: 0 20px;
  padding-bottom: 10px;
`;

export const Label = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const Card = styled.View.attrs({
  shadowOffset: {
    width: 0,
    height: 8,
  },
  shadowOpacity: 0.39,
  shadowRadius: 8.3,
  elevation: 7,
  shadowColor: '#000',
})`
  height: 180px;
  width: 90%;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 50px;
  background: #fff;
  padding: 15px 12px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardImage = styled.Image`
  width: 120px;
  height: 180px;
  background: #f0f0f0;
  margin-top: -40px;
  border-radius: 5px;
`;

export const CardPress = styled(TouchableWithoutFeedback)`
  padding-bottom: 10px;
`;

export const CardBody = styled.View`
  width: 60%;
`;

export const CardTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const CardSubtitle = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
`;

export const CardSubtitleText = styled.Text`
  margin-left: 1px;
  font-size: 14px;
  font-weight: bold;
  color: #f7b100;
`;

export const CardDescription = styled.Text`
  color: #444;
  text-align: justify;
`;

export const Pagination = styled.View`
  margin: 50px 0;
`;

export const MessageError = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-top: 40px;
  text-align: center;
`;

export const Loading = styled.View`
  padding: 25px 0;
`;
