import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {title: 'Restaurantes'},
      },
    },

    {
      initialRouteName: 'Main',
      defaultNavigationOptions: {
        headerTintColor: '#404000',
        headerStyle: {
          backgroundColor: '#eee',
        },
      },
    },
  ),
);

export default Routes;
