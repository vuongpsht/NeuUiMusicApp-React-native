/**
 *
 * @Author VuongPSHT code with ❤️
 * @Project Music with neumorphism UI design
 *
 */
import React from 'react';
import {RootStack} from './src/navigation';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Header} from './src/component/Header/Header';
import {AudioController} from './src/component/AudioController';
import {colors} from 'themes/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <Header />
      <RootStack />
      <AudioController />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.defaultColor,
  },
});
export default App;
