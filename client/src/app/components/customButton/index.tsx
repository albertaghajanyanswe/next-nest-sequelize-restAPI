'use client'
import React, { FC, memo } from 'react';
import Button from '@mui/material/Button';

import { stylesCallback } from './styles';
import { LoadingButton } from '@mui/lab';
import { useTheme } from '@mui/material';

interface iProps {
  label: string;
  variant?: 'outlined' | 'contained' | 'text';
  onClick?: () => void;
  sx?: any;
  startIcon?: any;
  endIcon?: any;
  btnType?: 'secondary' | 'primary' | 'tertiary' | 'ghost' | 'tabBtn';
  type?: 'submit' | 'button' | 'reset' | undefined;
  size?: 'small' | 'medium' | 'big';
  disabled?: boolean;
  onlyIcon?: boolean;
  loading?: boolean;
  href?: string;
  name?: string;
  value?: any;
  id?: string;
}

const CustomButton: FC<iProps> = ({
  label,
  variant = 'contained',
  onClick,
  sx = {},
  startIcon = null,
  endIcon = null,
  btnType = 'primary',
  type = 'button',
  size = 'medium',
  disabled = false,
  onlyIcon = false,
  loading = false,
  href = '',
  name,
  value,
  id
}) => {

  const theme = useTheme();
  const muiStyles = stylesCallback(theme);

  const btnStyle =
    btnType === 'primary'
      ? muiStyles.primaryBtn
      : btnType === 'secondary'
        ? muiStyles.secondaryBtn
        : btnType === 'tertiary'
          ? muiStyles.tertiaryBtn :
          btnType === 'tabBtn' ?
            muiStyles.tabBtn
            : muiStyles.ghostBtn;

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
  };

  /*
  * to show loading uncomment the following lines
  **startIcon={<LoopIcon />}
  **loadingPosition="start"
  **loadingIndicator={<Box sx={{...muiStyles.loading, ...(btnType === 'primary' && muiStyles.loadingPrimary)}}><LoadingSvg /></Box>}
  * comment the following line
  **loadingIndicator={<></>}
  */

  return loading ? (
    <LoadingButton
      loading
      endIcon={endIcon}
      // startIcon={<LoopIcon />}
      // loadingPosition="start"
      // loadingIndicator={<Box sx={{...muiStyles.loading, ...(btnType === 'primary' && muiStyles.loadingPrimary)}}><LoadingSvg /></Box>}
      loadingIndicator={<></>}
      disableRipple
      variant={variant}
      sx={{
        ...muiStyles.button, ...btnStyle, ...muiStyles[size], ...(onlyIcon && muiStyles.onlyIcon), ...sx
      }}
      type={type}
      disabled={disabled || loading}
      data-testid={name}
    >
      {label}
    </LoadingButton>
  ) : !href ?
    (
      <Button
        startIcon={startIcon}
        endIcon={endIcon}
        disableRipple
        variant={variant}
        onClick={handleClick}
        sx={{ ...muiStyles.button, ...btnStyle, ...muiStyles[size], ...(onlyIcon && muiStyles.onlyIcon), ...sx }}
        type={type}
        disabled={disabled || loading}
        name={name}
        value={value}
        id={id}
        data-testid={name}
      >
        {label}
      </Button>
    ) : (
      <Button
        startIcon={startIcon}
        endIcon={endIcon}
        disableRipple
        variant={variant}
        sx={{ ...muiStyles.button, ...btnStyle, ...muiStyles[size], ...sx }}
        type={type}
        disabled={disabled}
        // component={Link}
        href={href}
        id={id}
        name={name}
        data-testid={name}
      >{label}</Button>
    );
};

export default memo(CustomButton);
