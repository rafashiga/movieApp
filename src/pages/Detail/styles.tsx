import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  background: #fff;
  height: 100%;
`;

export const MovieImage = styled.Image.attrs({
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.39,
  shadowRadius: 8.3,
  elevation: 10,
  shadowColor: '#000',
})`
  width: 220px;
  height: 290px;
  margin: 0 auto;
  border-radius: 10px;
  background: #f0f0f0;
`;

export const MovieTitle = styled.Text`
  margin: 0 auto;
  margin-top: 15px;
  color: #333;
  font-size: 20px;
  font-weight: bold;
`;

export const MovieRating = styled.Text`
  margin: 0 auto;
  margin-top: 2px;
  color: #f7b100;
  font-size: 20px;
  font-weight: bold;
`;

export const MovieInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
`;

export const InfoItem = styled.View`
  align-items: center;
`;
export const InfoTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #777;
`;

export const InfoDescription = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const MovieDescription = styled.View`
  background: rgb(103, 58, 183);
  min-height: 200px;
  margin-top: 30px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const MovieContainer = styled.View`
  width: 80%;
  margin: 40px auto;
`;

export const MovieTitleOverview = styled.Text`
  font-size: 18px;
  color: #f0f0f0;
  margin-bottom: 10px;
`;

export const MovieOverview = styled.Text`
  font-size: 15px;
  color: #f0f0f0;
`;
