'use client';
import React, { useEffect } from 'react';
import { Box, FormControl, TextField } from '@mui/material';
import { muiStyles } from './styles';
import { useTranslation } from 'react-i18next';
import { iFilterTextField } from '@/configs/shared/types';
import { useDebounce } from '@/hooks/common/useDebaunce';

interface iProps<T> {
  field: T;
  onFilterCallback: ((filterObj: {[key: string]: any}) => void) | null;
  searchValue: any;
  withDefaultSize: boolean;
}

const DEFAULT_SELECT_MAX_WIDTH = 224;
const DEFAULT_SELECT_MIN_WIDTH = 224;

function CustomFilterTextField({
  field,
  onFilterCallback,
  searchValue = '',
  withDefaultSize
}: iProps<iFilterTextField>) {

  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = React.useState(searchValue);
  const debouncedValue = useDebounce(typeof searchTerm === 'object' ? searchTerm : {[field?.id]: searchTerm}, 1000);

  useEffect(() => {
      setSearchTerm({[field.id]: searchValue});
  }, [field, searchValue]);

  useEffect(() => {
    if (onFilterCallback) {
      onFilterCallback(debouncedValue);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <Box component="div" sx={{ ...muiStyles.fieldContainer, ...(withDefaultSize ? field.maxWidth ? { maxWidth: field.maxWidth } : { maxWidth: `${DEFAULT_SELECT_MAX_WIDTH}px` } : {}), ...(withDefaultSize ? field.minWidth ? { minWidth: field.minWidth } : { minWidth: `${DEFAULT_SELECT_MIN_WIDTH}px` } : {}) }}>
    {/* <Box component="div" sx={{ ...muiStyles.fieldContainer }}> */}
      <FormControl sx={muiStyles.formControl} variant="outlined">
        <TextField
          className={searchTerm?.[field.id]}
          size="small"
          placeholder={t(field.label)}
          type={field.type}
          id={field.id}
          value={searchTerm?.[field.id] || ''}
          variant="outlined"
          name={field.id}
          onChange={event => {
            setSearchTerm({[field.id]: event.target.value});
          }}
          InputLabelProps={{style: {fontSize: 14}}}
        />
      </FormControl>
    </Box>
  );
};

export default CustomFilterTextField;