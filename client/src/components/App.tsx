import { Box } from '@mui/material';
import { colorPalette } from 'src/theme';
import { ToggleColorModeButton } from './ToggleColorModeButton';
import type { VFC } from 'react';

export const App: VFC = () => {
  return (
    <>
      <ToggleColorModeButton />
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '100%',
          flex: 1,
          alignItems: 'center',
          p: 3,
        }}
      >
        {colorPalette.map((hexColor, i) => (
          <Box sx={{ backgroundColor: `${hexColor}.main`, flex: 1, height: '100%' }} key={i} />
        ))}
      </Box>
    </>
  );
};
