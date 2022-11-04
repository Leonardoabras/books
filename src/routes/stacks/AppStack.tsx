import React, { useEffect } from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';

import { getUser, getTokenSuccess } from '@/store/slices/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthStack from '@/routes/stacks/AuthStack';
import MainStack from '@/routes/stacks/MainStack';
import { useReduxSelector } from '@/hooks/useReduxSelector';

import { AppStackRoutes } from '@/config/constants/routenames';
import { setTokenApi } from '@/services/api';

type AppParamsList = {
  [AppStackRoutes.AuthStack]: undefined;
  [AppStackRoutes.MainStack]: undefined;
};

export type AppNavigationProp = StackNavigationProp<AppParamsList>;
const Stack = createStackNavigator<AppParamsList>();

const AppStack = () => {
  const { user } = useReduxSelector(state => state);
  const dispatch = useDispatch();

  async function loadStorage() {
    const storagedUser = await AsyncStorage.getItem('@Auth:user');

    if (storagedUser) {
      const data = JSON.parse(storagedUser);
      setTokenApi(data.token);
      dispatch(getUser({ userData: data.user }));
      dispatch(getTokenSuccess({ token: data.token }));
      console.log('DATA: ', data.token);
    }
  }
  console.log('USER TOKEN', user.token);

  useEffect(() => {
    loadStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user.token ? (
        <Stack.Screen name={AppStackRoutes.AuthStack} component={AuthStack} />
      ) : (
        <Stack.Screen name={AppStackRoutes.MainStack} component={MainStack} />
      )}
    </Stack.Navigator>
  );
};

export default AppStack;
