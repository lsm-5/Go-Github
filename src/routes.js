import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from './pages/Main';
import UserScreen from './pages/User';
import RepositoryScreen from './pages/Repository';

const Routes = createAppContainer(
  createStackNavigator(
    {
      MainScreen,
      UserScreen,
      RepositoryScreen,
    },
    {
      defaultNavigationOptions: {
        headerTitleAlign: 'center',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
