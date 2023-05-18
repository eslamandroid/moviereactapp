/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/home/Home';
import MaterialIcons from 'react-native-vector-icons/Feather';
import { NavigationContainer} from '@react-navigation/native';
import PopularScreen from '../screens/popular/PopularScreen';
import TopRateScreen from '../screens/toprate/TopRateScreen';
import UpComingScreen from '../screens/upcoming/UpComingScreen';
import MovieDetailsScreen from '../screens/moviedetails/MovieDetailsScreen';

export type RootStackParamList = {
  [x: string]: any;
  BottomNavigation:{}
  MovieDetails: {
    movieId: number;
  };
};
const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

export const MovieDetailsRoute = 'details';

const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarLabelStyle: { fontSize: 15, fontWeight: '600' },
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: '#fcb6b6',
      tabBarIconStyle: {
        width: 10,
        height: 10
      },
      tabBarStyle: {
        height: 85
      },
      headerStyle:{
        backgroundColor:'white'
      },
      headerTitleStyle:{
        fontWeight:'bold',
        fontSize:20,
        color:'red'
      },
      headerShadowVisible:true,
    }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="video" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Populars"
        component={PopularScreen}
        options={{
          tabBarLabel: 'Popular',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="trending-up" color={color} size={size} />
          ),
          
        }}
      />
      <Tab.Screen
        name="TopRated"
        component={TopRateScreen}
        options={{
          tabBarLabel: 'Top Rated',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="star" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="UpComing"
        component={UpComingScreen}
        options={{
          tabBarLabel: 'UpComing',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="fast-forward" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerShown: false 
        }}>
        <Stack.Screen
          name="BottomNavigation"
          component={BottomNavigation}
          options={{ 
            headerShown: false, 
            headerMode: 'screen',   
          }}
        />
        <Stack.Screen name='MovieDetails' component={MovieDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
