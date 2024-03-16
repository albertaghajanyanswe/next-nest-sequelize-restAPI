'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import EmptySVG from '@/assets/empty.svg';
// import { muiStylesWithTheme } from './styles';
import { useTheme } from '@mui/system';
import { globalMuiStyles } from '@/app/globalMuiStyles';

function EmptyState({
  title,
  desc
}: {
  title?: string,
  desc?: string
}) {
  const theme = useTheme();
  // const muiStyles = muiStylesWithTheme(theme);
  const toolbarMinHeight = theme.breakpoints.up('md') ? 64 : 56;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', height: `calc(100% - ${toolbarMinHeight}px)`, alignItems: 'center' }}>
      <Box sx={{ width: '92%', height: '90%', backgroundColor: 'primary.btnMainDisabled', padding: '24px 24px 36px 24px', borderRadius: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ m: 3 }}><EmptySVG /></Box>
        {title && <Typography sx={{ ...globalMuiStyles.font_14_16_500, color: 'primary.textColor1' }}>{title}</Typography>}
        {desc && <Typography sx={{ ...globalMuiStyles.font_14_20_400, mt: 1, color: 'primary.textColor5' }}>{desc}</Typography>}
        {/* <CustomButton sx={{ mt: 8, width: '224px' }} label="Return Home" onClick={() => navigate(routes.home.path)} /> */}
      </Box>
    </Box>
  )
}

export default EmptyState;