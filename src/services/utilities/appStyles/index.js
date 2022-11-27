import {StyleSheet} from 'react-native';
import {colors} from '../colors';

export const appStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.appBgColor,
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  paddingHorizontalBase: {
    paddingHorizontal: 10,
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  textMedium: {
    fontSize: 20,
  },

  textSmall: {
    fontSize: 15,
  },
});
