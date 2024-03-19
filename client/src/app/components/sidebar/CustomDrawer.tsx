'use client'
import React, { useEffect } from 'react';
import MuiDrawer, { DrawerProps } from '@mui/material/Drawer';
import { useTheme, Theme, CSSObject } from '@mui/material/styles';
import { variables } from '@/configs';
import { sidebarSlice } from '@/store/reducers/SidebarSlice';
import { useAppDispatch } from '@/hooks/reactQuery/redux';

interface IDrawerProps extends DrawerProps {
  open?: boolean;
  children?: React.ReactNode
}

const openedMixin = (theme: Theme): CSSObject => {
  return {
    width: variables.drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  }
};

const closedMixin = (theme: Theme): CSSObject => {
  return {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  }
};

const CustomDrawer = ({ open, children }: IDrawerProps) => {
  const theme = useTheme();
  const { toggleSidebarByValue } = sidebarSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(toggleSidebarByValue(!!open));
  }, [])

  useEffect(() => {
    dispatch(toggleSidebarByValue(!!open));
  }, [open])

  return (
    <MuiDrawer
      variant="permanent"
      open={open}
      sx={{
        width: variables.drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        }),
        '& > .MuiPaper-root': {
          backgroundColor: theme.palette.primary.main
        }
      }}
    >
      {children}
    </MuiDrawer>
  );
};

export default CustomDrawer;