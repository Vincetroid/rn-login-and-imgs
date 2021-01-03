import React from 'react';
import { ActivityIndicator, ImageBackground, StyleSheet } from 'react-native';

const PlaceHolderImg = () => (
  <ImageBackground
    source={require('../assets/img_placeholder.png')}
    style={styles.imgWrapper}
  >
    <ActivityIndicator size="large" color="#87CEFA" />
  </ImageBackground>
);

export default PlaceHolderImg;

const styles = StyleSheet.create({
  imgWrapper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
});