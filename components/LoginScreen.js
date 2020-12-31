import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View
} from 'react-native';

export default LoginScreen = ({ navigation }) => {

  const [emailState, setEmailState] = useState('');
  const [passwordState, setPasswordState] = useState('');

  const onChangeEmailText = (t) => {
    console.log(t)
    setEmailState(t);
  }

  const onChangePasswordText = (p) => {
    console.log(p)
    setPasswordState(p);
  }

  const submitHandler = () => {
    alert(55);
    navigation.navigate('Home', { name: 'Jane' });
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