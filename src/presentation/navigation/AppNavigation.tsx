/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/home/Home';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import PopularScreen from '../screens/popular/PopularScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Popular"
        component={PopularScreen}
        options={{
          tabBarLabel: 'Popular',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="timeline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TopRated"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Top Rated',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="star" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="UpComing"
        component={HomeScreen}
        options={{
          tabBarLabel: 'UpComing',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="keyboard-arrow-up" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomNavigation"
          component={BottomNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
