'use client';

import React, { ElementType, useEffect } from 'react';
import moment from 'moment';
import { Box, FormControl } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import CalendarSVG from '@/assets/16/calendar-filter.svg';
import { muiStyles } from './styles';
import { iFilterDatePickerField } from '@/configs/shared/types';
import { useDebounce } from '@/hooks/common/useDebaunce';

interface iProps<T> {
  field: T;
  onFilterCallback: ((filterObj: {[key: string]: any}) => void) | null;
  searchValue: any;
  withDefaultSize: boolean;
}

const DEFAULT_SELECT_MAX_WIDTH = 224;
const DEFAULT_SELECT_MIN_WIDTH = 224;

function CustomFilterDateTimePicker<T extends iFilterDatePickerField>({
  field,
  onFilterCallback,
  searchValue = '',
  withDefaultSize
}: iProps<T>) {

  const [searchTerm, setSearchTerm] = React.useState(searchValue);
  const [changeValue, setChangeValue] = React.useState('');
  const debouncedValue = useDebounce(typeof searchTerm === 'object' ? searchTerm : { [field?.id]: searchTerm }, 1000);

  const handleChange = (value: any) => {
    setSearchTerm({ [field.id]: value });
  }

  const handleChangeKeyboard = (value: any) => {
    const dateIsValid = moment(value, "L", true).isValid();
    if (dateIsValid) {
      setSearchTerm({ [field.id]: value });
    } else {
      setSearchTerm({ [field.id]: '' });
    }
    setChangeValue(value);
  }

  useEffect(() => {
    setSearchTerm({ [field.id]: searchValue });
  }, [field, searchValue]);

  useEffect(() => {
    if (onFilterCallback) {
      onFilterCallback(debouncedValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);


  return (
    <Box component="div" sx={{ ...muiStyles.fieldContainer, ...(withDefaultSize ? field.maxWidth ? { maxWidth: field.maxWidth } : { maxWidth: `${DEFAULT_SELECT_MAX_WIDTH}px` } : {}), ...(withDefaultSize ? field.minWidth ? { minWidth: field.minWidth } : { minWidth: `${DEFAULT_SELECT_MIN_WIDTH}px` } : {}) }}>
    {/* <Box component="div" sx={{ ...muiStyles.fieldContainer, width: {xs: 'calc(100% - 24px)', sm: '100%'} }}> */}
      {/* <FormControl sx={{ ...muiStyles.fieldContainer, width: {xs: 'calc(100% - 24px)', sm: '100%'} }} fullWidth variant="outlined"> */}
      <FormControl sx={{ ...muiStyles.fieldContainer, width: '100%' }} fullWidth variant="outlined">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            {...(field.views && { views: field.views })}
            {...(field.inputFormat && { inputFormat: field.inputFormat })}
            label=''
            value={searchTerm?.[field.id] || '' || changeValue}
            onChange={(value, keyboardInputValue) => {
              if (keyboardInputValue || !value) {
                handleChangeKeyboard(keyboardInputValue || '');
              } else {
                handleChange(value);
              }
            }}
            // PaperProps={{ sx: { mt: '16px'} }}
            // PopperProps={{ sx: { left: '16px!important' }}}
            components={{ OpenPickerIcon: CalendarSVG as ElementType<any> }}

            // renderInput={(params: any) =>{
            //   return (
            //     <TextField
            //     {...params}
            //     name={field.id}
            //     error={false}
            //     fullWidth
            //     size={field.size || 'small'}
            //     label={field.withoutLabel ? ((searchTerm?.[field.id] || changeValue) ? '' : t(field.label)) : t(field.label)}
            //     className={`${field.iconPosition === 'start' && 'themeDatePickerForLabelReverse'}`}
            //     {...(field.withoutLabel && { InputLabelProps: { shrink: false } })}
            //     variant={field.variant || 'outlined'}
            //     placeholder={t(field.placeholder)}
            //     sx={muiStyles.textField}
            //   />
            //   )
            // }}

          />
        </LocalizationProvider>
      </FormControl>
    </Box>
  );
};

export default CustomFilterDateTimePicker;