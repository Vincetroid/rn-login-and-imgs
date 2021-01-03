import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  // Image
  ActivityIndicator,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Image } from 'react-native-elements';
import Loader from '../components/Loader';

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
      console.log('RESPONSE')
      console.log(result)
      Toast.show('Loading images');
      setImages(result.data);
    } catch (error) {
      // if (error.response.status === 401) {
      //   Toast.show('You\'re not authorized');
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
        <>
          <Loader />
          {/* <Button
            title="Log Out"
            onPress={() => removeToken()}
          />  */}
        </>
      ) : (
        <>
          <ScrollView>
            {images.map((img, index) => {
              console.log(img)
              return (
                <View style={styles.cardContainer} key={index}>
                  <Text style={styles.cardTitle}>{img.title}</Text>
                  <Text style={styles.cardDescription}>{img.description}</Text>
                  <Text>{img.image}</Text>
                  <Image
                    source={{uri: img.image}}
                    style={{ width: 300, height: 200 }}
                    PlaceholderContent={<ActivityIndicator size="large" color="#87CEFA" />}
                    placeholderStyle={styles.imgPlaceholder}
                  />
                </View>
              );
            })}
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
    backgroundColor: 'azure'
  },
  btn: {
    position: 'absolute',
    bottom: 0,
  }
});