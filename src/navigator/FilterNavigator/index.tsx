import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ExpenseInfo from 'components/organisms/ExpenseInfo';
import { GRAY_COLOR, PRIMARY_COLOR } from 'theme/colors';

const Tab = createMaterialTopTabNavigator();

const Transactions = () => <ExpenseInfo type="Transactions" />;
const UpcomingBill = () => <ExpenseInfo type="Upcoming Bills" />;

export const FilterNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: PRIMARY_COLOR,
        tabBarInactiveTintColor: GRAY_COLOR,
        tabBarIndicatorStyle: { backgroundColor: PRIMARY_COLOR },
      }}>
      <Tab.Screen name="Upcoming Bills" component={UpcomingBill} />
      <Tab.Screen name="Transactions" component={Transactions} />
    </Tab.Navigator>
  );
};
