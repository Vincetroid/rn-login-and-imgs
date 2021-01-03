/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import LogoutScreen from './components/LogoutScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs;

const Stack = createStackNavigator();

const App: () => React$Node = ({ navigation }) => {

  // const getData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@storage_Key')
  //     // if(value !== null) {
  //       // Toast.show('Welcome again!');
  //       navigation.navigate('Home');
  //     // }
  //   } catch(e) {
  //     // Toast.show('There was an error reading your prev session');
  //     navigation.navigate('Login');
  //   }
  // }

  // useEffect(() => {
  //   getData();
  // }, []);

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
