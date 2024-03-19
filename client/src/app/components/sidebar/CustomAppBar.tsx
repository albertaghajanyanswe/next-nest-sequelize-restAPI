'use client'

import React, { memo } from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';
import variables from '@/configs/variables';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  children?: React.ReactNode
}

const CustomAppBar = ({ open, children }: AppBarProps) => {
  const theme = useTheme();

  return (
    <MuiAppBar
      position="fixed"
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
          marginLeft: variables.drawerWidthValue,
          width: `calc(100% - ${variables.drawerWidth})`,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }}
    >
      {children}
    </MuiAppBar>
  );
};

export default memo(CustomAppBar);