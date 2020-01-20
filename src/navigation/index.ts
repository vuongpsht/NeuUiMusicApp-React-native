import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {HomeScreen} from 'screen/HomeScreen';
import {PlaylistScreen} from 'screen/PlaylistScreen';
const AppStack = createStackNavigator(
  {
    HomeScreen,
    PlaylistScreen,
  },
  {
    headerMode: 'none',
  },
);

export const RootStack = createAppContainer(AppStack);
