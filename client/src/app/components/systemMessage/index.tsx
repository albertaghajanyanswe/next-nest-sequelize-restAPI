'use client'
import React, { ReactNode } from "react";
import { SnackbarAction } from "notistack";
import SuccessSvg from '@//assets/systemMessage/success.svg';
import ErrorSvg from '@/assets/systemMessage/error.svg';
import WarningSvg from '@/assets/systemMessage/warning.svg';
import InfoSvg from '@/assets/systemMessage/info.svg';
import { Box } from "@mui/material";
import { Theme } from '@mui/system';

const SystemMessage = (
  enqueueSnackbar: any,
  message: string | ReactNode,
  options: { variant: 'success' | 'error' | 'warning' | 'info' | 'default', sx?: any, action?: SnackbarAction, theme?: Theme }
) => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { variant, sx = {}, action, theme } = options;

  const variantBGColor = {
    success: (theme as Theme)?.palette.primary.green1,
    error: (theme as Theme)?.palette.primary.red1 || 'yellow',
    warning: (theme as Theme)?.palette.primary.orange1,
    info: (theme as Theme)?.palette.primary.lightBG1,
    default: (theme as Theme)?.palette.primary.lightBG1
  }

  console.log('variantBGColor = ', variantBGColor)
  const variantBorderColor = {
    success: (theme as Theme)?.palette.primary.green2,
    error: (theme as Theme)?.palette.primary.red2,
    warning: (theme as Theme)?.palette.primary.orange2,
    info: (theme as Theme)?.palette.primary.borderColor2,
    default: (theme as Theme)?.palette.primary.borderColor2
  }
  const variantTextColor = {
    success: (theme as Theme)?.palette.primary.green3,
    error: (theme as Theme)?.palette.primary.red5,
    warning: (theme as Theme)?.palette.primary.orange3,
    info: (theme as Theme)?.palette.primary.btnMainPressed,
    default: (theme as Theme)?.palette.primary.btnMainPressed
  }

  const variantIcon = {
    success: <SuccessSvg />,
    error: <ErrorSvg />,
    warning: <WarningSvg />,
    info: <InfoSvg />,
    default: <InfoSvg />
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sxStyles = {
    // "& .notistack-MuiContent": {
    "& .SnackbarContent-root": {
      color: "primary.textColor4",
      backgroundColor: variantBGColor[variant],
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: variantBorderColor[variant],
      boxShadow: 'none',
      borderRadius: '8px',
      padding: '7px 16px',
      justifyContent: 'start',
      alignItems: 'start',
      '& .SnackbarItem-message': {
        justifyContent: 'start'
      }
    }
  }

  enqueueSnackbar(
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ mr: 1, height: '16px' }}>{variantIcon[variant]}</Box>
      <Box component="span" sx={{ lineHeight: '16px', fontSize: '14px', fontWeight: 500 }}>{message}</Box>
    </Box>,
    {
      variant: variant,
      style: {
        backgroundColor: variantBGColor[variant],
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: variantBorderColor[variant],
        color: variantTextColor[variant],
      },
      // sx: { ...sxStyles, ...sx },
      action
    })
}

export default SystemMessage;