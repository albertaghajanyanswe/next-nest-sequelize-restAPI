'use client'

import React, { useCallback, useState } from 'react';
import { InputAdornment, TextField, Box, Typography, IconButton } from '@mui/material';
import { Path, useController, FieldValues } from 'react-hook-form';
import Tooltip from '@mui/material/Tooltip';
import InputError from '@/assets/form/input-error.svg';
import VisibleOn16Svg from '@/assets/form/visibility-on-16.svg';
import VisibleOff16Svg from '@/assets/form/visibility-off-16.svg';
import VisibleOn24Svg from '@/assets/form/visibility-on-24.svg';
import VisibleOff24Svg from '@/assets/form/visibility-off-24.svg';
import FormFieldTitle from '@/app/components/form/fieldTitle';

import { muiStyles } from './styles';

// rules={{ required: requiredErrMsg(t, t('nickName')) }}
// name="nickName"
// placeholder={t('nickName')}
// label={t('nickName')}
// sxContainer={{ mt: 0 }}
// title={t('nickName')}
// helperTooltip={t('nickName')}
// borderRadius={8}

interface iFormTextField<T> {
  name: Path<T>;
  placeholder: string;
  label: string;
  rules?: any;
  variant?: 'filled' | 'outlined' | 'standard';
  type?: string
  sx?: any;
  sxContainer?: any;
  sxDescription?: any;
  sxTitle?: any;
  size?: 'small' | 'medium';
  withoutLabel?: boolean;
  multiline?: boolean;
  rows?: number;
  startIcon?: any;
  endIcon?: any;
  autoComplete?: string;
  withHelperText?: boolean;
  withEyeIcon?: boolean;
  eyeIconSize?: 16 | 24;
  title?: string;
  helperTooltip?: string;
  description?: string | React.ReactNode;
  borderRadius?: number;
  disabled?: boolean;
  showInputErrorIcon?: boolean;
  sxTooltip?: any;
  defaultValue?: string;
  insideSpan?: boolean;
  pattern?: string | RegExp;
}

const FormTextField = <T extends FieldValues>({
  rules,
  name,
  placeholder,
  label,
  autoComplete = '',
  sx = {},
  sxContainer = {},
  sxDescription = {},
  sxTitle = {},
  variant = 'outlined',
  type = 'text',
  size = 'small',
  withoutLabel = true,
  multiline = false,
  rows = 3,
  startIcon: StartIcon = null,
  endIcon: EndIcon = null,
  withHelperText = false,
  withEyeIcon = false,
  title = '',
  helperTooltip = '',
  description = '',
  borderRadius = 4,
  disabled = false,
  eyeIconSize = 24,
  showInputErrorIcon = true,
  sxTooltip = {},
  defaultValue = '',
  insideSpan = false,
  pattern,
}: iFormTextField<T>) => {
  const { field: { onChange, value, ref }, fieldState: { error } } = useController<T>({
    rules,
    name
  })

  const [showPass, setShowPass] = useState(false);

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((e) => {
    if (!pattern || e.target.value.match(new RegExp(pattern))) {
      onChange(e)
    } else {
      return false
    }
  }, [pattern, onChange])

  const sxStyle = (hasError: boolean) => {
    return {
      ...muiStyles.textField,
      '& > .MuiOutlinedInput-root': {
        ...((hasError || withEyeIcon) && { pr: 2 }),
        ...(multiline && muiStyles.textArea),
        ...((multiline && !withHelperText) && muiStyles.textAreaWithErrorIcon),
        ...sx,
        ...((StartIcon && muiStyles.inputWithStartIcon)),
        borderRadius: `${borderRadius}px`,
      },
    }
  };

  return (
    <Box component={insideSpan ? "span" : "div"} sx={{ ...muiStyles.fieldContainer, ...sxContainer, ...(insideSpan ? { lineHeight: size === 'small' ? '40px' : '48px' } : {}) }}>
      {title && !insideSpan && <FormFieldTitle sxLabel={sxTitle} title={title} helperTooltip={helperTooltip} sxTooltip={sxTooltip} />}
      <TextField
        id={name}
        name={name}
        disabled={disabled}
        onChange={handleChange}
        value={defaultValue || value || ''}
        fullWidth
        error={Boolean(error?.message)}
        helperText={withHelperText && error?.message}

        label={withoutLabel ? "" : label}
        {...(withoutLabel && { InputLabelProps: { shrink: false } })}
        variant={variant}
        placeholder={placeholder}

        {...(type === 'datetime-local' && { InputLabelProps: { shrink: true } })}
        sx={{ ...sxStyle(Boolean(error?.message)), ...(insideSpan ? { width: 'auto' } : {}) }}
        size={size}
        type={withEyeIcon && showPass ? 'text' : type}
        autoComplete={autoComplete}
        inputRef={ref}
        multiline={multiline}
        rows={rows}
        // todo autofill
        // inputProps={{
        //   form: {
        //     autoComplete: autoComplete,
        //   }
        // }}
        inputProps={{
          "data-testid": name,
        }}
        InputProps={{
          // todo autofill
          // autoComplete: autoComplete,
          ...(StartIcon && { startAdornment: (<InputAdornment position="start" sx={muiStyles.startIconSx}> <StartIcon /> </InputAdornment>) }),
          ...(EndIcon && { endAdornment: (<InputAdornment sx={{ mr: 2 }} position="start"> {typeof EndIcon === 'object' ? EndIcon : <EndIcon />} </InputAdornment>) }),
          ...(withHelperText ? null : (Boolean(error?.message) || type === 'password') && {
            endAdornment:
              <>
                {withEyeIcon && (showPass ?
                  eyeIconSize === 24 ? (<IconButton sx={muiStyles.eyeIconBtn} onClick={() => setShowPass(false)}><VisibleOn24Svg /></IconButton>) : (<IconButton sx={muiStyles.eyeIconBtn} onClick={() => setShowPass(false)}><VisibleOn16Svg /></IconButton>) :
                  eyeIconSize === 24 ? (<IconButton sx={muiStyles.eyeIconBtn} onClick={() => setShowPass(true)}><VisibleOff24Svg /></IconButton>) : (<IconButton sx={muiStyles.eyeIconBtn} onClick={() => setShowPass(true)}><VisibleOff16Svg /></IconButton>)
                )}
                {showInputErrorIcon && Boolean(error?.message) && <Tooltip sx={{ zIndex: 1001 }} title={error?.message as string}>
                  <Box sx={{ display: 'flex', cursor: 'pointer', ml: withEyeIcon ? 1 : 0 }}>
                    <InputError />
                  </Box>
                </Tooltip>}
              </>
          }),
        }}
      />
      {!insideSpan && description && <Box sx={{ ...muiStyles.descriptionBlock, ...sxDescription }}>
        {typeof description === 'string' ?
          (<Typography sx={muiStyles.descriptionText}>{description}</Typography>) :
          <>{description}</>
        }
      </Box>}
    </Box >
  );
};

export default FormTextField;