import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from 'themes/colors';
import {NeumorphismCard} from 'component/NeumorphismCard';
import {useIsFocused} from 'react-navigation-hooks'

export const HomeScreen = () => {
  const isFocused = useIsFocused()
  return (
    <View style={styles.container}>
      <NeumorphismCard {...{isFocused}} />
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
