import React, {FunctionComponent} from 'react';
import {View, StyleSheet} from 'react-native';
import {dimensions} from 'themes/baseDimentions';
import {colors} from 'themes/colors';

export const NeumorphismTop: FunctionComponent = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -3,
    borderBottomWidth: 1,
    borderBottomColor: '#2B3033',
    width: dimensions.screenWidth,
    backgroundColor: colors.defaultColor,
  },
});
