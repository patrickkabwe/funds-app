import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from 'resources/routes.json';
import {
  Home,
  Settings,
  Profile,
  Statistics,
  Wallent,
} from 'screens/PrivateScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'styled-components';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.lightGray,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
      }}>
      <Tab.Screen
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={size + 10} />
          ),
        }}
        name={routes.home}
        component={Home}
      />
      <Tab.Screen
        options={{
          title: 'Statistics',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="google-analytics"
              color={color}
              size={size + 10}
            />
          ),
        }}
        name={routes.statistics}
        component={Statistics}
      />
      <Tab.Screen
        options={{
          title: 'Wallet',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet" color={color} size={size + 10} />
          ),
        }}
        name={routes.wallent}
        component={Wallent}
      />
      <Tab.Screen
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-alt" color={color} size={size + 10} />
          ),
        }}
        name={routes.profile}
        component={Profile}
      />
    </Tab.Navigator>
  );
};
