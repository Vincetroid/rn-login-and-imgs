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
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default HomeScreen = ({ navigation }) => {

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('@storage_Key')
      navigation.navigate('Login');
    } catch(e) {
      Toast.show('There was an error removing the token');
    }
    Toast.show('Token removed');
  }

  return (
    <>
      <Text>thi is sparta</Text>
      <Button
        title="Remove token"
        onPress={() => removeValue()}
      />
    </>
  );
};