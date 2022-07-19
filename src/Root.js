import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import dayjsUTC from 'dayjs-plugin-utc';
import { StylesProvider, createGenerateClassName } from '@mui/styles';
import dayjs from 'dayjs';

import theme from './theme.js';
import App from './App';

import { store, persistor } from './store';

dayjs.extend(dayjsUTC);

function Root() {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'jsVersion-',
    seed: 'jsVersion',
  });

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StylesProvider generateClassName={generateClassName}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </StylesProvider>
      </PersistGate>
    </Provider>
  );
}
export default Root;
