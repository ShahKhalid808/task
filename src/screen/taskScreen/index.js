import React from 'react';
import {Spacer, TextInput, Wrapper, Text} from '../../components';
import Client from '../../services/api';

function TaskScreen() {
  /// state initalization

  const [userData, setUserData] = React.useState('');
  /// functions

  /// to call function onChangeText

  const fetchData = async name => {
    try {
      let response = await Client.getData(name);
      setUserData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  //// render methods
  return (
    <Wrapper isMain paddingHorizontalBase>
      <Spacer />
      <TextInput
        onChangeText={text => {
          fetchData(text);
        }}
        placeholder={'Enter text to search'}
      />
      <Spacer />
      {userData && (
        <>
          <Text isMedium>
            age : <Text isSmall> {userData.age}</Text>
          </Text>
          <Text isMedium>
            count : <Text isSmall> {userData.count}</Text>
          </Text>
          <Text isMedium>
            name : <Text isSmall> {userData.name}</Text>
          </Text>
        </>
      )}
    </Wrapper>
  );
}

export default TaskScreen;
