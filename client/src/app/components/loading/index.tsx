import React, { FC } from 'react';
import { Box, CircularProgress, Typography, useMediaQuery } from '@mui/material';
import { muiStyles } from './styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import { variables } from '@/configs';

interface iProps {
  sx?: any;
  size?: number;
  withDrawer?: boolean;
}

const Loading: FC<iProps> = ({ sx, size = 50, withDrawer = true }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const toolbarMinHeight = (isMobile || isTablet) ? variables.closedDrawerWidth : variables.drawerWidth;

  return (
    <Box component="div" sx={{...muiStyles.root, ...sx, ...(withDrawer ? {width: `calc(100% - ${toolbarMinHeight})`} : {})}}>
      <CircularProgress size={size}/>
      <Typography variant="h1" sx={muiStyles.title}> {t('loading')} </Typography>
    </Box>
  );
}

export default Loading;