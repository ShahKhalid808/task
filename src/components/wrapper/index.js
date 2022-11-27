import React from 'react';
import {View} from 'react-native';
import {appStyles} from '../../services';

export default ({
  children,
  isMain,
  flex,
  flexDirectionRow,
  alignItemsCenter,
  paddingHorizontalBase,
  style,
}) => {
  return (
    <View
      style={[
        {flex: flex},
        isMain && appStyles.mainContainer,
        flexDirectionRow && appStyles.flexDirectionRow,
        alignItemsCenter && appStyles.alignItemsCenter,
        paddingHorizontalBase && appStyles.paddingHorizontalBase,
        style,
      ]}>
      {children}
    </View>
  );
};
