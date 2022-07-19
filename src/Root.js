import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';

import dayjsUTC from 'dayjs-plugin-utc';
import { StylesProvider, createGenerateClassName } from '@mui/styles';
import dayjs from 'dayjs';

import theme from './theme.js';
import App from './App';

import store from './store';

dayjs.extend(dayjsUTC);

function Root() {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'jsVersion-',
    seed: 'jsVersion',
  });

  return (
    <Provider store={store}>
      <StylesProvider generateClassName={generateClassName}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StylesProvider>
    </Provider>
  );
}
export default Root;
