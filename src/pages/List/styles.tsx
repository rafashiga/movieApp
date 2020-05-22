import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  background: #f0f0f0;
  padding: 50px 0;
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
  margin-bottom: 50px;
  background: #fff;
  padding: 15px 12px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardImage = styled.View`
  width: 120px;
  height: 180px;
  background: #333;
  margin-top: -40px;
  border-radius: 5px;
`;

export const CardBody = styled.View`
  width: 60%;
`;

export const CardTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const CardSubtitle = styled.Text`
  font-size: 14px;
  margin-bottom: 10px;
  color: #444;
`;

export const CardDescription = styled.Text`
  color: #444;
  text-align: justify;
`;
