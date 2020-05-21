import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 20px;
  height: 50px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.5)',
})`
  flex: 1;
  font-size: 15px;
  color: #333;
`;
