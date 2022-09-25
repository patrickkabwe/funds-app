import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from 'resources/routes.json';
import {
  Login,
  Register,
  ForgotPassword,
  NewPassword,
  VerifyPasswordResetCode,
} from 'screens/PublicScreen';

const PublicStack = createNativeStackNavigator();

export const PublicNavigator = () => {
  return (
    <PublicStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#ffffff' },
      }}
      initialRouteName={routes.home}>
      <PublicStack.Screen name={routes.login} component={Login} />
      <PublicStack.Screen name={routes.register} component={Register} />
      <PublicStack.Screen
        name={routes.forgotPassword}
        component={ForgotPassword}
      />
      <PublicStack.Screen name={routes.newPassword} component={NewPassword} />
      <PublicStack.Screen
        name={routes.sendVerificationCodePassword}
        component={VerifyPasswordResetCode}
      />
    </PublicStack.Navigator>
  );
};
