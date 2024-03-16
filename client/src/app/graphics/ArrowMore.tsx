import React from 'react';
import { useTheme, Theme } from '@mui/system';

export const ArrowMore = ({color, ...props}:{color?: any, props?: any}) => {
  const theme = useTheme();
  return (
    <svg {...props} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6.59961L8 10.5996L12 6.59961" stroke={color || (theme as Theme)?.palette?.primary?.btnMain} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};