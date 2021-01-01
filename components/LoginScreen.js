import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import axios from 'axios';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default LoginScreen = ({navigation }) => {

  // const [emailState, setEmailState] = useState('challenge@maniak.co');
  // const [passwordState, setPasswordState] = useState('maniak2020');
  const [emailState, setEmailState] = useState('');
  const [passwordState, setPasswordState] = useState('');

  const onChangeEmailText = (t) => {
    setEmailState(t);
  }

  const onChangePasswordText = (p) => {
    setPasswordState(p);
  }

  const submitHandler = async () => {
    try {
      const result = await axios.post('https://challenge.maniak.co/api/login', {
        username: emailState,
        password: passwordState
      });

      if (result.status === 200) {
        storeData(result.data.token);
        Toast.show('Welcome!');
        navigation.navigate('Home', { name: 'Jane' });
      }
    } catch (error) {
      if (error.response.status === 401) {
        Toast.show('Incorrect email or password, please check your credentials');
        return;
      }
      Toast.show('Something unexpected happened, please contact Maniak\'s support team');
    }
  }

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      Toast.show('There was an error setting the session');
    }
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={text => onChangeEmailText(text)}
          value={emailState}
          autoCompleteType="email"
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor="gray"
          returnKeyType="next"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={text => onChangePasswordText(text)}
          value={passwordState}
          autoCompleteType="password"
          keyboardType="default"
          placeholder="Password"
          placeholderTextColor="gray"
          returnKeyType="next"
          textContentType="password"
          secureTextEntry
        />
        <Button
          title="Log In"
          onPress={() => submitHandler()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'gray',
  },
  wrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: '80%'
  },
  textInput: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 10
  },
});