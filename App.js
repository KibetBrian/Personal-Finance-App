import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import {} from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border: 'transparent'
  }
};

const Stack = createNativeStackNavigator();
const App = () => {

  React.useEffect(()=>{
    SplashScreen.hide();
  },[]);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName = {'WelcomeScreen'}>
        <Stack.Screen options={{headerShown: false}} name = "WelcomeScreen" component = {WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
