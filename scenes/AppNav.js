import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../src/Home/HomeScreen';
import Login from '../src/authentication/Login';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options = {{headerShown:false}}
        />

        <Stack.Screen
          name= "Login"
          component = {Login} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;