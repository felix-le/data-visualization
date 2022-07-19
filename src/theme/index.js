// @mui
import { createTheme } from '@mui/material/styles';

//
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';

// ----------------------------------------------------------------------

const themeOptions = {
  palette: palette.dark,
  typography,
  breakpoints,
  shape: { borderRadius: 8 },
  shadows: shadows.dark,
  customShadows: customShadows.dark,
};

const theme = createTheme(themeOptions);
theme.components = componentsOverride(theme);
export default theme;
