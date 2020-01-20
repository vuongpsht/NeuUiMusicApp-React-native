import React, {FunctionComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from 'themes/colors'
import {dimensions} from 'themes/baseDimentions'

export const NeumorphismNumberButton: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Text>1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    backgroundColor: colors.defaultColor,
    width: dimensions.spacing.bigger,
    height: dimensions.spacing.bigger
  }
});
