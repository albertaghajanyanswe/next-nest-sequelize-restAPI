import React from 'react';
import { Theme, useTheme } from '@mui/system';

export const ArrowMorePagination = ({ color, ...props }: { color?: any, props?: any }) => {
  const theme = useTheme();
  return (
    <svg {...props} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6.3125L8 10.3125L12 6.3125" stroke={color || (theme as Theme)?.palette?.primary?.textColor3} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};