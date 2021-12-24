import { PaletteMode, PaletteOptions } from '@mui/material';

export const colorPalette = [
  'primary',
  'secondary',
  'warning',
  'error',
  'success',
];

/** The custom theme implementation */
const colorModeMap = {
  light: {
    primary: {
      main: '#20AAEA' // blue
    },
    secondary: {
      main: '#FC91AD' // pink
    },
    warning: {
      main: '#FD9A00' // orange
    },
    error: {
      main: '#E8384F' // red
    },
    success: {
      main: '#62D26F' // green
    },
  },
  dark: {
    background: {
      default: '#051226' // dark navy
    },
  },
};

const getThemePalette = (mode: PaletteMode): PaletteOptions => {
  return colorModeMap[mode];
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...getThemePalette(mode),
  },
});
