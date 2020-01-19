import React, {FunctionComponent} from 'react';
import {View, StyleSheet} from 'react-native';
import {dimensions} from 'themes/baseDimentions';
import {colors} from 'themes/colors';

export const NeumorphismBottom: FunctionComponent = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    borderBottomWidth: 2.5,
    borderBottomColor: '#34393D',
    width: dimensions.screenWidth,
    backgroundColor: colors.defaultColor,
  },
});
