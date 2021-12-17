import { Box, IconButton } from '@mui/material';
import type { VFC } from 'react';
import { useColorMode } from 'src/providers/ThemeProvider';
import { Brightness4, Brightness7 } from '@mui/icons-material';

export const ToggleColorModeButton: VFC = () => {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        padding: 2,
      }}
    >
      {`${colorMode.charAt(0).toUpperCase() + colorMode.slice(1)} Mode`}
      <IconButton onClick={setColorMode} color="inherit">
        {colorMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Box>
  );
};
