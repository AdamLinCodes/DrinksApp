import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import CustomButton from './components/button.component';
import Title from './components/title.component';
import DrinkCard from './components/drinkCard.component';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Title/>
      
      <View style={styles.buttonContainer}>
        <CustomButton title="Drinks"/>
        <CustomButton title="Drinks"/>
        <CustomButton title="Drinks"/>
      </View>

      <DrinkCard/>
      

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
  },
  buttonContainer: {
    height: screenHeight * 0.1,
    width: screenWidth * 0.8,
    flexDirection: 'row',
    justifyContent: 'center',
    // borderWidth: 2, // Border width in pixels
    // borderColor: 'green',
  }
});
