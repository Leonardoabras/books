import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import Login from '@/screens/Login';

type AuthParamsList = {
  Login: undefined;
};

export type AuthNavigationProp = StackNavigationProp<AuthParamsList>;
const Stack = createStackNavigator<AuthParamsList>();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
