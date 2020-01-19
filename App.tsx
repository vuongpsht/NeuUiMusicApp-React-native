/**
 *
 * @Author VuongPSHT code with ❤️
 * @Project Music with neumorphism UI design
 *
 */



import React from 'react';
import {RootStack} from './src/navigation';
import {SafeAreaView, StatusBar} from 'react-native'
import {Header} from './src/component/Header/Header'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden={true} />
      <Header />
      <RootStack />
    </SafeAreaView>
  );
};

export default App;
