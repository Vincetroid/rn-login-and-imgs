import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

export default HomeScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};