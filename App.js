import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {} from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import HomeScreen from './Screens/HomeScreen';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './navigation/Tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border: 'transparent'
  }
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator;
const App = () => {

  React.useEffect(()=>{
    SplashScreen.hide();
  },[]);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName = {'WelcomeScreen'}>
        <Stack.Screen options={{headerShown: false}} name = "WelcomeScreen" component = {WelcomeScreen} />
        <Stack.Screen options={{headerShown: false}} name="Home" component = {Tabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
