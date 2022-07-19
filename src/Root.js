import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import dayjsUTC from 'dayjs-plugin-utc';
import { StylesProvider, createGenerateClassName } from '@mui/styles';
import dayjs from 'dayjs';

import theme from './theme.js';
import App from './App';

dayjs.extend(dayjsUTC);

function Root() {
  const generateClassName = createGenerateClassName({
    productionPrefix: 'jsVersion-',
    seed: 'jsVersion',
  });

  return (
    <StylesProvider generateClassName={generateClassName}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StylesProvider>
  );
}
export default Root;
