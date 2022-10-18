import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from '@/screens/Home';
import DetailBook from '@/screens/DetailBook';

export type MainStackParamsList = {
  Home: undefined;
  DetailBook: { bookId: string };
};

export type MainStackNavigationProp = StackNavigationProp<MainStackParamsList>;

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='DetailBook' component={DetailBook} />
    </Stack.Navigator>
  );
};

export default MainStack;
