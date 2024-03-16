'use client'

import React from 'react';
import { Box, FormControl, FormHelperText, Tooltip } from '@mui/material';
import { Path, useController } from "react-hook-form";
import { MuiTelInput } from "mui-tel-input";
import InputError from '@/assets/form/input-error.svg';
import FormFieldTitle from '@/app/components/form/fieldTitle';
import { muiStyles } from './styles';


const FormPhoneInput = <T,>({
  rules,
  name,
  placeholder,
  sx = {},
  sxContainer = {},
  withHelperText = false,
  title = '',
  helperTooltip = '',
  size = 'small',
}: {
  rules?: any;
  name: Path<T>;
  placeholder: string;
  sx?: any;
  sxContainer?: any;
  withHelperText?: boolean;
  title?: string;
  helperTooltip?: string;
  size?: 'small' | 'medium';
}) => {
  const { field: { onChange, value }, fieldState: { error } } = useController({ name, rules });

  return (
    <Box component="div" sx={{ ...muiStyles.fieldContainer, ...sxContainer }}>
      {title && <FormFieldTitle title={title} helperTooltip={helperTooltip} />}
      <FormControl sx={{ m: 0, maxWidth: '100%', minWidth: '100%', ...muiStyles.phone }} error={Boolean(error?.message)}>
        <Box
          component={MuiTelInput}
          placeholder={placeholder}
          value={value || ''}
          onChange={onChange}
          sx={{ ...muiStyles.inputField, ...sx }}
          defaultCountry='AM'
          error={Boolean(error?.message)}
          size={size}
          MenuProps={{ disablePortal: true, disableScrollLock: false, sx: { ...muiStyles.popover } }}
        />
        {Boolean(error?.message) && <Tooltip title={error?.message as string}>
          <Box sx={{ ...muiStyles.errorIcon, ...(size === 'medium' && { top: '12px' }) }}>
            <InputError />
          </Box>
        </Tooltip>}
        {withHelperText && Boolean(error?.message) && <FormHelperText>{error?.message}</FormHelperText>}
      </FormControl >
    </Box>
  );
};

export default FormPhoneInput;