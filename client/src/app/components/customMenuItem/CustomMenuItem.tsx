'use client'

import React from 'react';
import { useTheme } from '@mui/system';
import { Box, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import { stylesWithTheme } from './styles';

interface IProps {
  text: string,
  children?: any,
  onClick?: () => void,
  disableItem?: boolean,
  isLinkActive?: boolean
};

const CustomMenuItem = ({ text, children, onClick, disableItem, isLinkActive }: IProps) => {
  const theme = useTheme();
  const muiStyles = stylesWithTheme(theme);

  return (
    <MenuItem disabled={disableItem} onClick={onClick} sx={muiStyles.menuItem}>
      <Box sx={muiStyles.listItem}>
        {children &&
          <ListItemIcon sx={{...muiStyles.listItemIcon, ...(isLinkActive ? muiStyles.linkActive : {}) }}>
            {children}
          </ListItemIcon>
        }
        <ListItemText sx={{...muiStyles.listItemText, ...(isLinkActive ? muiStyles.linkActive : {}) }} primary={text} />
      </Box>
    </MenuItem>
  );
}

export default CustomMenuItem;