/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import LogoutScreen from './components/LogoutScreen';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs;

const Stack = createStackNavigator();

const App: () => React$Node = ({ navigation }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerLeft: null
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerLeft: null
          }}
        />
        <Stack.Screen
          name="Logout"
          component={LogoutScreen}
          options={{
            headerLeft: null,
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
