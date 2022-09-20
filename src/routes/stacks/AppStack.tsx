import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import AuthStack from '@/routes/stacks/AuthStack';
import MainStack from '@/routes/stacks/MainStack';

import { AppStackRoutes } from '@/config/constants/routenames';

type AppParamsList = {
  [AppStackRoutes.AuthStack]: undefined;
  [AppStackRoutes.MainStack]: undefined;
};

export type AppNavigationProp = StackNavigationProp<AppParamsList>;
const Stack = createStackNavigator<AppParamsList>();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={AppStackRoutes.AuthStack} component={AuthStack} />
      <Stack.Screen name={AppStackRoutes.MainStack} component={MainStack} />
    </Stack.Navigator>
  );
};

export default AppStack;
