import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen';
import CadastroScreen from './Screens/CadastroScreen';
import HomeScreen from './Screens/HomeScreen';
import PeixeScreen from './Screens/PeixeScreen';
import OceanoScreen from './Screens/OceanoScreen';
import FloraScreen from './Screens/FloraScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{headerShown: false}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Peixes" component={PeixeScreen} options={{headerShown: false}} />
        <Stack.Screen name="Oceanos" component={OceanoScreen} options={{headerShown: false}} />
        <Stack.Screen name="Flora" component={FloraScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
