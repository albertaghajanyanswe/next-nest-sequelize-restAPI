import React from 'react';
import { FieldValues, Path, useController } from "react-hook-form";
import { Box, FormControl, FormControlLabel, Switch, Typography } from '@mui/material';

import { muiStyles } from './styles';

const FormSwitchField = <T extends FieldValues>({
  rules,
  name,
  sx = {},
  sxLabel = {},
  label = '',
  labelElement = null
}: {
  rules?: any;
  name: Path<T>;
  sx?: any;
  sxLabel?: any;
  label?: string;
  labelElement?: React.ReactNode;
}) => {
  const { field: { onChange, value }, fieldState: { error } } = useController<T>({
    rules,
    name
  })
  return (
    <FormControl>
      <FormControlLabel
        control={
          <Switch
            name={name}
            disableRipple
            sx={{ ...sx }}
            onClick={(e) => {
              onChange(e);
            }}
            value={value}
            checked={Boolean(value)}
          />
        }
        sx={{ ...muiStyles.label, ...sxLabel, ...(Boolean(error?.message) && muiStyles.errorLabel), }}
        label={
          labelElement ? <Box sx={{ ...(Boolean(error?.message) && muiStyles.errorLabelBlock) }}>{labelElement}</Box> : <Typography sx={sxLabel}>{label}</Typography>
        }
      />
    </FormControl>
  )
};

export default FormSwitchField;