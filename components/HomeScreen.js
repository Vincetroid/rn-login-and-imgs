import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Loader from '../components/Loader';
import Card from '../components/Card';

export default HomeScreen = ({ navigation }) => {

  const [token, setToken] = useState();
  const [images, setImages] = useState([]);

  const getImages = async () => {
    try {
      const result = await axios.get('https://challenge.maniak.co/api/images', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      Toast.show('Loading images');
      setImages(result.data);
    } catch (error) {
      // if (error.response.status === 401) {
      //   Toast.show('You\'re not authorized');
      //   console.log(error.response)
      //   return;
      // }
      // Toast.show('Something unexpected happened, please contact Maniak\'s support team');
    }
  }

  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem('@storage_Key')
      navigation.navigate('Logout');
    } catch(e) {
      Toast.show('There was an error closing the session');
    }
  }

  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        setToken(value);

        setTimeout(function(){ getImages(); }, 5000);
      }
    } catch(e) {
      Toast.show('There was an error reading your prev session');
    }
  }

  useEffect(() => {
    getToken();
  }, [token]);

  return (
    <>
      {images.length === 0 ? (
        <Loader />
      ) : (
        <>
          <ScrollView>
            {images.map((img, index) => <Card data={img} index={index} /> )}
          </ScrollView>
          <Button
            title="Log Out"
            onPress={() => removeToken()}
            style={styles.btn}
          /> 
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10
  },
  cardDescription: {
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10
  },
  cardContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 30,
    marginBottom: 15,
  },
  imgPlaceholder: {
    backgroundColor: 'azure',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    position: 'absolute',
    bottom: 0,
  }
});