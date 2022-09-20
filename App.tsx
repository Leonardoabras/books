import React from 'react';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/config/styles/theme';
import Routes from '@/routes/Routes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
