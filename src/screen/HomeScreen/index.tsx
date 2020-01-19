import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from 'themes/colors';
import {NeumorphismCard} from '../../component/NeumorphismCard';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <NeumorphismCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.defaultColor,
  },
});
