import React, { useContext } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
import AuthContext from './AuthContext';

export default HomeScreen = ({ navigation, route }) => {

  const authContext = useContext(AuthContext);

  // console.log('authContext')
  // console.log(authContext)
  // return <Text>This is {route.params.name}'s profile</Text>;
  return (
    <>
      <Text>thi is sparta</Text>
      <Text>{authContext.authToken}</Text>
    </>
  );
};