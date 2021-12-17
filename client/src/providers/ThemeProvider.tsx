import { useState, createContext, useContext, useMemo } from 'react';
import { createTheme, CssBaseline, PaletteMode, ThemeProvider as MaterialUIThemeProvider } from '@mui/material';
import { getDesignTokens } from 'src/theme';

const ColorModeContext = createContext({
  colorMode: 'light',
  setColorMode: () => {},
});

/** Hooks that allows dark or light mode */
export const useColorMode = () => useContext(ColorModeContext);

/** Custom theme provider */
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode>('light');
  const setColorMode = useMemo(() => {
    return () => setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={{ colorMode: mode, setColorMode }}>
      <MaterialUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MaterialUIThemeProvider>
    </ColorModeContext.Provider>
  );
};
