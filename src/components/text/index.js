import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {appStyles} from '../../services';

export default ({style, children, isMedium, isSmall, numberOfLines}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        //normal text
        isMedium && styles.mediumTextStyle,
        isSmall && styles.smallTextStyle,
        style,
      ]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  mediumTextStyle: {
    ...appStyles.textMedium,
  },

  smallTextStyle: {
    ...appStyles.textSmall,
  },
});
