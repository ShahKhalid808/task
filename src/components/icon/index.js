import React from 'react';
import {Image} from 'react-native';
import Wrapper from '../wrapper';

export const Custom = ({icon, size, color}) => {
  return (
    <Wrapper>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          height: size ? size : 20,
          width: size ? size : 20,
          tintColor: color,
        }}
      />
    </Wrapper>
  );
};
