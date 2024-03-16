'use client'

import { SnackbarProvider } from 'notistack';
import { Box } from '@mui/material';

export const CustomSnackbarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{ justifyContent: 'center' }}
      component={SnackbarProvider}
      autoHideDuration={5000}
      hideIconVariant
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      maxSnack={4}
    >
      {children}
    </Box>
  )
}