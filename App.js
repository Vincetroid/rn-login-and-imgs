/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useEffect, useState, createContext } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import { AuthProvider } from './components/AuthContext';

// const AuthContext = createContext();
// const authContext = useContext(AuthContext);
const Stack = createStackNavigator();

const App: () => React$Node = () => {

  const [isSignedIn, setIsSignedIn] = useState(false);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        // return value;
        setIsSignedIn(true);
        Toast.show(value);
      }
    } catch(e) {
      Toast.show('There was an error reading your prev session');
    }
  }

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('@storage_Key')
      setIsSignedIn(false);

    } catch(e) {
      Toast.show('There was an error removing the token');
    }
    Toast.show('Token removed');
  }

  useEffect(() => {
    getData();
    // removeValue();
  }, []);

  return (
    // <AuthContext.Provider value={authContext}>
    // <AuthContext.Provider value={isSignedIn}>
    // <AuthProvider value={5}>
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {isSignedIn ? (
            <Stack.Screen
              name="Home"
              component={HomeScreen}
            />
          ) : (
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ title: 'Log in' }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
