'use client';

import React, { useRef } from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import  SearchSVG from '@/assets/24/search.svg';
import  CloseSVG from '@/assets/24/close.svg';
import { muiStylesWithTheme } from './styles';
import { useTheme } from '@mui/system';
import { t } from 'i18next';
import { useDebounce } from '@/hooks/common/useDebaunce';

function CustomSearch({
  onSearchCallback,
  searchValue,
  disableFieldsOnSearch,
  placeholder,
  searchOpened,
  setSearchOpened,
  disabled = false

}: {
  onSearchCallback: ((searchValue: string) => void),
  searchValue: string,
  disableFieldsOnSearch?: any,
  placeholder?: string,
  searchOpened: boolean,
  setSearchOpened: (val: boolean) => void,
  disabled?: boolean

}
) {
  const theme = useTheme();
  const muiStyles = muiStylesWithTheme(theme);
  // const [isOpen, setOpen] = React.useState(Boolean(searchValue));
  const [searchTerm, setSearchTerm] = React.useState(searchValue);
  const debouncedValue = useDebounce(searchTerm, 1000);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleDisableFieldsOnSearch = () => {
    if (disableFieldsOnSearch && typeof disableFieldsOnSearch === 'function') {
      disableFieldsOnSearch(true);
    }
  }

  const handleOpenOrClose = () => {
    const newValue = !searchOpened;
    // setOpen(newValue);
    setSearchOpened(newValue);
    if (searchTerm && handleDisableFieldsOnSearch && typeof handleDisableFieldsOnSearch === 'function') {
      handleDisableFieldsOnSearch();
    }
    setSearchTerm('');
  };

  React.useEffect(() => {
    setSearchTerm(searchValue);
  }, [searchValue]);

  React.useEffect(() => {
    if (inputRef && inputRef?.current) {
      inputRef.current.focus();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputRef.current, searchOpened]);

  React.useEffect(() => {
    onSearchCallback(debouncedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end', flexGrow: 1 }}>
      <TextField
        placeholder={placeholder || t('search')}
        value={searchTerm}
        onChange={event => {
          setSearchTerm(event.target.value);
          handleDisableFieldsOnSearch();
        }}
        id="search"
        sx={{ ...muiStyles.searchInput, display: searchOpened ? 'inherit' : 'none' }}
        inputRef={inputRef}
      />
      <Box component='div' sx={muiStyles.rightRoot}>
        <IconButton disabled={disabled} disableRipple aria-label="search" color="primary" sx={muiStyles.search} onClick={handleOpenOrClose}>
          {searchOpened ? <CloseSVG /> : <SearchSVG />}
        </IconButton>
      </Box>
    </Box>
  );
};

export default CustomSearch;