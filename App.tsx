import React from 'react';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import { Provider } from 'react-redux';

import store from '@/store';

import theme from '@/config/styles/theme';

import Routes from '@/routes/Routes';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
