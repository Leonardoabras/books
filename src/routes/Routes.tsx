import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppStack from './stacks/AppStack';

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default Routes;
