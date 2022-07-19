import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#852853',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#13214a',
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
    MuiTextField: {
      variant: 'outlined',
      margin: 'dense',
    },
  },

  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#e8e9ed',
          fontSize: '14px',
        },
      },
    },
    MuiButton: {
      root: {
        borderRadius: 5,
        minWidth: 130,
        fontWeight: 'bold',
        textTransform: 'none',
        fontFamily: 'FilsonProRegular, sans-serif',
        margin: 0,
      },
    },
    MuiMenuItem: {
      root: {
        whiteSpace: 'pre-wrap',
      },
    },
  },
  typography: {
    fontFamily: ['FilsonProRegular', 'FilsonProBold'].join(','),
    fontSize: 14,
  },
});

export default theme;
