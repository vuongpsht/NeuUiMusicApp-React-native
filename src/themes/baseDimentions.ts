import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const dimensions = {
  screenWidth: width,
  screenHeight: height,
  spacing: {
    small: 5,
    normal: 10,
    bigger: 20,
  },
  component: {
    width: {
      big: (width * 80) / 100,
    },
  },
};
