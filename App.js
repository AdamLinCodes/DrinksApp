import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './pages/main.page';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainPage" component={MainPage} />
        {/* <Stack.Screen name="Card" component={drinkCard} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
