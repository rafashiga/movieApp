import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TInput } from './styles';

interface Props {
  style: any;
  icon: string;
}

const Input: React.FC<Props> = ({ style, icon, ...rest }, ref) => {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(0 ,0, 0, 0.7)" />}
      <TInput {...rest} ref={ref} />
    </Container>
  );
};

export default forwardRef(Input);
