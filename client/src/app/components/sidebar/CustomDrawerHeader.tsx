'use client';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

const CustomDrawerHeader = ({ children }: { children?: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <Box component='div' sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    }}>
      {children}
    </Box>
  )
}

export default CustomDrawerHeader;