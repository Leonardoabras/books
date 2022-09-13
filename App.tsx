import React from 'react';

import { ThemeProvider } from 'styled-components/native';

import theme from './src/config/styles/theme';
import Login from '@/screens/Login';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
};

export default App;
