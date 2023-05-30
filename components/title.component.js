import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Title = () => {

  return (
    <View style={styles.container}>
      <Image source={require('../assets/cocktail.png')} style={styles.image}/>
      <Text style={styles.boldText}>Let's Make A Drink! :)</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  boldText: {
    fontWeight: 'bold',
    fontSize: 30,

    // borderWidth: 2, // Border width in pixels
    // borderColor: 'black',
  },
  image: {
    width: 100,
    height: 100,

    // borderWidth: 2,
    // borderColor: 'black',
  },
  container: {
    height: screenHeight * 0.3,
    width: screenWidth * 0.8,
    justifyContent: 'center',
    alignItems: 'center',

    // borderWidth: 2,
    // borderColor: 'blue',
  },
});

export default Title;