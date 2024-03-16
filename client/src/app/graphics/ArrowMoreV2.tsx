import React from 'react';
import { Theme, useTheme } from '@mui/system';

export const ArrowMoreV2 = ({color, ...props}:{color?: any, props?: any}) => {
  const theme = useTheme();
  return (
    <svg {...props} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 0.801025L5 4.80103L9 0.801025" stroke={color || (theme as Theme)?.palette?.primary?.textColor3} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
  )
};