import { Theme, useTheme } from '@mui/material/styles';

export const ArrowLeftBtn = ({ color, ...props }: { color?: any, props?: any }) => {
  const theme = useTheme();
  return (
    <svg {...props} width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="32" height="32" rx="16" fill="white" />
      <path d="M21.6663 16.9997H12.333M12.333 16.9997L16.9997 21.6663M12.333 16.9997L16.9997 12.333" stroke={color || (theme as Theme)?.palette?.primary?.main} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="1" y="1" width="32" height="32" rx="16" stroke={color || (theme as Theme)?.palette?.primary?.textColor1} strokeWidth="1.25" />
    </svg>
  )
};