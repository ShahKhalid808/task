import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {Icons, Wrapper} from '..';
import {appStyles, colors, appIcons} from '../../services';

export default ({placeholder, onChangeText, style}) => {
  return (
    <Wrapper
      flexDirectionRow
      paddingHorizontalBase
      alignItemsCenter
      style={[styles.textInputContainer, appStyles.shadow, style]}>
      <Wrapper flex={0.1}>
        <Icons.Custom icon={appIcons.backArrow} />
      </Wrapper>
      <Wrapper flex={0.9}>
        <TextInput placeholder={placeholder} onChangeText={onChangeText} />
      </Wrapper>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    borderRadius: 100,
    backgroundColor: colors.appBgColor,
  },
});
