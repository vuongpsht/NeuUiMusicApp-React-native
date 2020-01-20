import {StyleSheet} from 'react-native';
import {dimensions} from 'themes/baseDimentions';

export const basicStyle = StyleSheet.create({
  title: {
    color: '#e0e0e0',
    fontSize: 20,
    fontWeight: '500',
  },
  text: {
    color: '#7E7F81',
    fontSize: 12,
    fontWeight: '400',
    marginTop: dimensions.spacing.small,
  },
});
