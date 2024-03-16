'use client';
import React, { useEffect, useState } from 'react';
import { Avatar, Box, Divider, FormControl, ListSubheader, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import CheckedSVG from '@/assets/select/select-item-checked-small.svg';
import AscSVG from '@/assets/select/filter-asc.svg';
import DescSvg from '@/assets/select/filter-desc.svg';

import { muiStylesWithTheme } from './styles';
import { useTheme } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { ArrowMoreV2 } from '../../../../graphics/ArrowMoreV2';
import { iFilterSortField } from '@/configs/shared/types';
import { useDebounce } from '@/hooks/common/useDebaunce';

const DEFAULT_SELECT_MAX_WIDTH = 224;
const DEFAULT_SELECT_MIN_WIDTH = 224;
const ITEM_HEIGHT = 40;

interface iProps<T> {
  field: T;
  onFilterCallback?: ((filterObj: { [key: string]: any }) => void) | null;
  searchValue?: any;
  withDefaultSize: boolean;
  onSortCallback?: (sortObj: { field: string, order: 'asc' | 'desc' | '' }) => void;
  sortValue?: string[];
}

function CustomSortField<T extends iFilterSortField>({
  field,
  withDefaultSize,
  onSortCallback,
  sortValue
}: iProps<T>) {
  const { t } = useTranslation();
  const theme = useTheme();
  const muiStyles = muiStylesWithTheme(theme);
  const isMultiple = true || field.multiple;
  const defaultValue = sortValue || [];
  const [searchTerm, setSearchTerm] = React.useState<string[]>(defaultValue);
  const [sortState, setSortState] = React.useState<{ field: string, order: 'asc' | 'desc' | '' }>({
    field: sortValue?.find(i => (i !== 'asc' && i !== 'desc')) || '',
    order: (sortValue?.find(i => (i === 'asc' || i === 'desc')) || '') as 'asc' | 'desc' | ''
  });
  const debouncedValue = useDebounce(searchTerm, 1000);
  const [modifiedOptions, setModifiedOptions] = useState<readonly any[]>([]);
  let modifiedOptionsCB: any[] = [];

  useEffect(() => {
    if (onSortCallback) {
      onSortCallback(sortState);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  useEffect(() => {
    if (!field.optionsCallback && typeof field.options !== 'function') {
      setModifiedOptions(field.options);
    }
  }, [field])

  let response = { data: { list: [], length: 0 }, isLoading: true };
  if (field.optionsCallback) {
    response = field.optionsCallback({})
    modifiedOptionsCB = field.adapterCallback(response?.data?.list);
  }

  const optionsList = field.optionsCallback ? modifiedOptionsCB : modifiedOptions;

  const handleOnChang = (event: SelectChangeEvent<string[]>) => {
    const { target: { value } } = event;
    if (!value || value.length === 0) {
      setSearchTerm([]);
      setSortState({ field: '', order: '' })
      return value;
    }

    const last = value[value.length - 1];
    let valueCopy = typeof value === 'string' ? [value] : [...value];

    if (last === 'asc') {
      valueCopy = valueCopy.filter((item) => item !== 'desc')
    } else if (last === 'desc') {
      valueCopy = valueCopy.filter((item) => item !== 'asc')
    } else if (last && (last !== 'asc' && last !== 'desc')) {
      const idx = valueCopy.findIndex((item) => item !== 'asc' && item !== 'desc' && item !== last);
      if (idx !== -1) {
        valueCopy.splice(idx, 1);
      }
    }

    const orderField = valueCopy.find(i => (i !== 'asc' && i !== 'desc')) || '';
    const orderBy = (valueCopy.find((i) => (i === 'asc' || i === 'desc')) || '') as 'asc' | 'desc' | '';

    setSortState({ field: orderField, order: orderBy });
    // if field and order exist change query in url
    if (orderField && orderBy) {
      setSearchTerm(valueCopy);
    }
  };

  const EmptyMenuItem = ({ lbl = t(field.placeholder as string) }) => {
    return (
      <Typography sx={{ ...muiStyles.menuItem, height: 'auto', mt: 0, alignItems: 'center' }}>
        <Box component="em" sx={{ color: 'primary.textColor6', fontStyle: 'normal', fontFamily: 'var(--font-poppins)', fontSize: '14px', lineHeight: '24px' }}>{lbl}</Box>
      </Typography>
    )
  }

  const rerenderOptions = () => {
    if (field.optionsCallback && response?.isLoading) {
      return <EmptyMenuItem lbl="Loading..." />
    }
    const r = (
      optionsList?.map((opt: any) => opt.type === 'group' ? (
        <ListSubheader sx={muiStyles.listSubheader}>{opt.label}</ListSubheader>
      ) : opt.type === 'separator' ? (
        <Box sx={{ p: '4px 12px 0 12px' }} key={opt.name}><Divider sx={muiStyles.divider} /></Box>
      ) : (
        <MenuItem disableRipple key={opt.name} value={opt.value} sx={muiStyles.menuItem}>
          <Box sx={{ display: 'flex', flexDirection: 'row!important', alignItems: 'center' }}>
            {(opt.avatar || opt.avatar === '') && <Box sx={{ mr: 1 }}><Avatar alt='avatar' src={opt.avatar} sx={{ width: 24, height: 24 }} /></Box>}
            {opt.name === 'asc' ? <Box sx={{ display: 'flex', mr: 1 }}><AscSVG /></Box> : opt.name === 'desc' ? <Box sx={{ display: 'flex', mr: 1 }}><DescSvg /></Box> : null}
            <Typography sx={muiStyles.label}>{opt.label}</Typography>
          </Box>
          <Box className="themeShowInSelected" sx={{ display: 'none' }} component="div">
            <CheckedSVG />
          </Box>
        </MenuItem>
      ))
    )
    return r;
  }

  const showResetOption = field.showResetOption ?? true;

  return (
    <Box component="div" sx={{ ...muiStyles.fieldContainer }}>
      <FormControl sx={{ m: 0, width: withDefaultSize ? DEFAULT_SELECT_MAX_WIDTH : '100%' }}>
        <Select
          // value={searchTerm || []}
          value={[...(sortState.field ? [sortState.field] : []), ...(sortState.order ? [sortState.order] : [])] || []}
          onChange={handleOnChang}
          name={field.id}
          displayEmpty
          sx={{ ...muiStyles.select }}
          multiple={isMultiple}
          IconComponent={ArrowMoreV2}
          size={field.size || 'small'}
          MenuProps={{
            PaperProps: {
              sx: {
                ...(muiStyles.dropdownBlock), ...(!showResetOption && muiStyles.dropdownHideResetOpt),
                maxHeight: ITEM_HEIGHT * (field.maxItemCount || 5),
                ...(withDefaultSize && { width: DEFAULT_SELECT_MAX_WIDTH, minWidth: DEFAULT_SELECT_MIN_WIDTH }),
                ...(field.sxPaperProps && field.sxPaperProps)
              },
            },
          }}
          renderValue={isMultiple ? (selected: string[] = []) => {
            const selectedOptions = optionsList?.filter((i: any) => selected.includes(i.value) || selected.includes(`${i.value}`));
            if (Array.isArray(selected)) {
              if (!selected.length) {
                return (<EmptyMenuItem />);
              }
              const result = selectedOptions?.map((i: any) => `${i.label}`);
              return (
                <Box sx={{ display: 'flex', alignItems: 'center', minHeight: '24px' }}>
                  {result.includes('Ascending') ? <Box sx={{ display: 'flex', mr: 1 }}><AscSVG /></Box> : result.includes('Descending') ? <Box sx={{ display: 'flex', mr: 1 }}><DescSvg /></Box> : null}
                  {result.find(i => i !== 'Ascending' && i !== 'Descending') || ''}
                </Box>
              )
            }
            return (
              <Box sx={{ display: 'flex', alignItems: 'center', minHeight: '24px' }}>
                {(selected as string[]).includes('Ascending') ? <Box sx={{ display: 'flex', mr: 1 }}><AscSVG /></Box> : (selected as string[]).includes('Descending') ? <Box sx={{ display: 'flex', mr: 1 }}><DescSvg /></Box> : null}
                {(selected as string[]).find(i => i !== 'Ascending' && i !== 'Descending')}
              </Box>
            )
          } : (selected: any) => {
            if (!selected.length) {
              return (<EmptyMenuItem />)
            }
            const selectedOption: any = optionsList?.find((i: any) => selected[0] === i.value || selected[0] === `${i.value}`);
            return selectedOption?.label;
          }}
        >
          {!isMultiple &&
            <MenuItem value="" key='empty' sx={{ height: '40px' }}>
              <Box component="em" sx={{ color: 'primary.textColor6', fontStyle: 'normal', fontFamily: 'var(--font-poppins)', fontSize: '14px' }}>
                <div>{field.insteadNone || t('none')}</div>
              </Box>
            </MenuItem>}
          {rerenderOptions()}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomSortField;