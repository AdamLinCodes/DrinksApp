import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Dimensions } from 'react-native';
import DrinkCard from '../components/drinkCard.component';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const DrinkCardPage = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <DrinkCard></DrinkCard>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    backgroundColor: '#E0FFFF',
    alignItems: 'center',
    justifyContent: 'center',

    // borderWidth: 2, // Border width in pixels
    // borderColor: 'red',
  }
});

export default DrinkCardPage;