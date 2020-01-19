import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {HomeScreen} from 'screen/HomeScreen';

const AppStack = createStackNavigator(
  {
    HomeScreen,
  },
  {
    headerMode: 'none',
  },
);

export const RootStack = createAppContainer(AppStack);
