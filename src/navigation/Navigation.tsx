import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './Navigation.type';
import Home from '../pages/home';
import Fight from '../pages/fight/Fight';
import appTheme from './Theme';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Fight"
          component={Fight}
          options={{title: 'Fight'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
