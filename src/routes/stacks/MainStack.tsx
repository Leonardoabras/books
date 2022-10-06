import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from '@/screens/Home';
import DetailBook from '@/screens/DetailBook';

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName='DetailBook' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='DetailBook' component={DetailBook} />
    </Stack.Navigator>
  );
};

export default MainStack;
