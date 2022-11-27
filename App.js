import React from 'react';
import {Wrapper} from './src/components';
import * as Screen from './src/screen';
export default function App() {
  return (
    <Wrapper isMain>
      <Screen.TaskScreen />
    </Wrapper>
  );
}
