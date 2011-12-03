import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../src/Home/HomeScreen';
import Login from '../src/authentication/LoginContainer';

const Stack = createStackNavigator();
// const isAuthenticated = false
const MyStack = (props) => {
  console.log('isauthenitcaed == ',props.isAuthenticated)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
        props.isAuthenticated==true ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />

        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
        </>
      )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;