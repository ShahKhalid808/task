import React from 'react';
import Wrapper from '../wrapper';

export default Spacer = ({height, style}) => {
  const defaultHeight = height ? height : 10;
  return <Wrapper style={[{height: defaultHeight}, style]} />;
};
