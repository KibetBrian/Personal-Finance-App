import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import GoalsScreen from '../Screens/GoalsScreen';
import {configs} from '../config';
import ProfileScreen from '../Screens/ProfileScreen';
import AnalyticsScreen from '../Screens/AnalyticsScreen';
import WalletScreen from '../Screens/WalletScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#fff',
          elevation: 0,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                bottom: focused ? 17 : 0,
                tintColor: focused
                  ? configs.colors.primary
                  : configs.colors.grey,
                ...styles.tabIcon,
              }}
              source={require('../assets/icons/home.png')}
            />
          ),
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
       <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                bottom: focused ? 17 : 0,
                tintColor: focused
                  ? configs.colors.primary
                  : configs.colors.grey,
                ...styles.tabIcon,
              }}
              source={require('../assets/icons/wallet.png')}
            />
          ),
        }}
        name="WalletScreen"
        component={WalletScreen}
      />
      <Tab.Screen 
      options={
        {
            tabBarIcon: ({focused})=>(
              <Image
              style={{
                bottom: focused ? 17 : 0,
                tintColor: focused
                  ? configs.colors.primary
                  : configs.colors.grey,
                ...styles.tabIcon,
              }}
              source={require('../assets/icons/plus.png')}
            />
            )
        }
    }
      name="GoalScreen" component={GoalsScreen} />

      <Tab.Screen
      options={
        {
            tabBarIcon: ({focused})=>(
              <Image
              style={{
                bottom: focused ? 17 : 0,
                tintColor: focused
                  ? configs.colors.primary
                  : configs.colors.grey,
                ...styles.tabIcon,
              }}
              source={require('../assets/icons/analytics.png')}
            />
            )
        }
    }
       name="AnalyticsScreen" component={AnalyticsScreen} />
      <Tab.Screen 
      name="ProfileScreen" component={ProfileScreen}
      options={
          {
              tabBarIcon: ({focused})=>(
                <Image
                style={{
                  bottom: focused ? 17 : 0,
                  tintColor: focused
                    ? configs.colors.primary
                    : configs.colors.grey,
                  ...styles.tabIcon,
                }}
                source={require('../assets/icons/user.png')}
              />
              )
          }
      }
       />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    width: 35,
    height: 35,
  },
});

export default Tabs;
