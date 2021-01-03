import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PlaceHolderImg from '../components/PlaceHolderImg';
import { Image } from 'react-native-elements';

const Card = ({ data, index }) => {

  const [uri, setUri] = useState();

  useEffect(() => {
    setUri(data.image.replace(/https/g,'http'));
  }, []);

  return (
    <View style={styles.cardContainer} key={index}>
      <Text style={styles.cardTitle}>{data.title}</Text>
      <Text style={styles.cardDescription}>{data.description}</Text>
      <Image
        source={{uri: uri}}
        style={{ width: 300, height: 200 }}
        PlaceholderContent={<PlaceHolderImg />}
        placeholderStyle={styles.imgPlaceholder}
      />
    </View>
  )
}

export default Card;

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
});