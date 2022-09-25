import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from 'resources/routes.json';
import { BottomNavigator } from 'navigator/BottomNavigator';

const PrivateStack = createNativeStackNavigator();

export const PrivateNavigator = () => {
  return (
    <PrivateStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#ffffff' },
      }}
      initialRouteName={routes.home}>
      <PrivateStack.Screen name={routes.bottom} component={BottomNavigator} />
    </PrivateStack.Navigator>
  );
};
