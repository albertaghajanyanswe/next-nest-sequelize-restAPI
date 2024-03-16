'use client';
import React, { useEffect, useState } from 'react';
import { Avatar, Box, Checkbox, FormControl, ListItemText, ListSubheader, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import CheckedSVG from '@/assets/select/select-item-checked-small.svg';
import CheckboxSelectedSVG from '@/assets/select/checkbox-selected.svg';
import CheckboxNotSelectedSVG from '@/assets/select/checkbox-not-selected.svg';
import CheckboxIndeterminateSVG from '@/assets/select/checkbox-indeterminate.svg';
import { ArrowMoreV2 } from '@/app/graphics/ArrowMoreV2';

import { muiStylesWithTheme } from './styles';
import { useTheme } from '@mui/system';
import { iFilterSelectField } from '@/configs/shared/types';
import { useTranslation } from 'react-i18next';
import { getCurrentUser } from '@/services/lsService';
import { useDebounce } from '@/hooks/common/useDebaunce';

const DEFAULT_SELECT_MAX_WIDTH = 224;
const DEFAULT_SELECT_MIN_WIDTH = 224;
const ITEM_HEIGHT = 40;

interface iProps<T> {
  field: T;
  onFilterCallback: ((filterObj: { [key: string]: any }) => void) | null;
  searchValue: any;
  withDefaultSize: boolean;
}

function CustomFilterSelect<T extends iFilterSelectField>({
  field,
  onFilterCallback,
  searchValue = [],
  withDefaultSize
}: iProps<T>) {

  const { t } = useTranslation();
  const theme = useTheme();
  const muiStyles = muiStylesWithTheme(theme);
  const currentUser = getCurrentUser()?.user;

  const defaultValue = searchValue || [];

  const [searchTerm, setSearchTerm] = React.useState<string[]>(defaultValue);

  const debouncedValue = useDebounce(typeof searchTerm === 'object' ? searchTerm : { [field?.id]: searchTerm }, 1000);
  const [modifiedOptions, setModifiedOptions] = useState<readonly any[]>([]);
  let modifiedOptionsCB: any[] = [];

  // todo uncomment if need to show all values selected (e.g. in departments tab changing tab)
  useEffect(() => {
    setSearchTerm(searchValue || []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(searchValue)]);

  useEffect(() => {
    if (onFilterCallback) {
      onFilterCallback({ [field.id]: debouncedValue });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  useEffect(() => {
    if (!field.optionsCallback && typeof field.options !== 'function') {
      setModifiedOptions(field.options);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field])


  let response = { data: { list: [], length: 0 }, isLoading: true };

  if (field.optionsCallback) {
    response = field.optionsCallback({});
    modifiedOptionsCB = field.adapterCallback(response?.data?.list);
  }

  const optionsList = field.optionsCallback ? modifiedOptionsCB : modifiedOptions;

  const handleOnChang = (event: SelectChangeEvent<string[]>) => {
    const { target: { value } } = event;
    let copy = typeof value === 'string' ? [...value.split(',')] : [...value];
    if (value[value.length - 1] === "all") {
      setSearchTerm(searchTerm.length === optionsList.length ? [] : optionsList.map((i: any) => i.value));
      return;
    }
    copy = copy.filter(function (obj: any) { return ![null, undefined, ''].includes(obj) });
    setSearchTerm(copy);
  };

  const EmptyMenuItem = ({ lbl = t(field.placeholder as string) }) => {
    return (
      <Typography sx={{ ...muiStyles.menuItem, height: 'auto', mt: 0, alignItems: 'center' }}>
        <Box component="em" sx={{ color: 'primary.textColor6', fontStyle: 'normal', fontSize: '14px', lineHeight: '24px' }}>{lbl}</Box>
      </Typography>
    )
  }

  const rerenderOptions = () => {
    if (field.optionsCallback && response?.isLoading) {
      return <EmptyMenuItem lbl="Loading..." />
    }
    if (field.multiple) {
      return (
        optionsList?.map((opt: any) => opt.type === 'group' ? (
          <ListSubheader key={opt.label} sx={muiStyles.listSubheader}>{opt.label}</ListSubheader>
        ) : (
          <MenuItem disableRipple key={opt.value} value={opt.value} sx={{ ...muiStyles.option, backgroundColor: 'inherit', height: '40px', p: 0, '&:not(:last-child)': { mb: '4px' } }}>
            <Checkbox
              disableRipple
              checked={searchTerm?.indexOf(opt.value) > -1 || searchTerm?.indexOf(`${opt.value}`) > -1}
              checkedIcon={<CheckboxSelectedSVG />}
              icon={<CheckboxNotSelectedSVG />}
            />
            <Box sx={{ display: 'flex', flexDirection: 'row!important', alignItems: 'center', flexGrow: 1 }}>
              <ListItemText key={opt.label} primary={opt.label} />
              {(opt.avatar || opt.avatar === '') && <Box sx={{ mr: 1 }}><Avatar alt='avatar' src={opt.avatar} sx={{ width: 24, height: 24 }} /></Box>}
            </Box>
          </MenuItem>
        ))
      )
    }
    return (
      optionsList?.map((opt: any) => opt.type === 'group' ? (
        <ListSubheader sx={muiStyles.listSubheader}>{opt.label}</ListSubheader>
      ) : (
        <MenuItem disableRipple key={opt.value} value={opt.value} sx={muiStyles.menuItem}>
          <Box sx={{ display: 'flex', flexDirection: 'row!important', alignItems: 'center' }}>
            {(opt.avatar || opt.avatar === '') && <Box sx={{ mr: 1 }}><Avatar alt='avatar' src={opt.avatar} sx={{ width: 24, height: 24 }} /></Box>}
            <Typography sx={muiStyles.label}>{opt.label}</Typography>
          </Box>
          <Box className="themeShowInSelected" sx={{ display: 'none' }} component="div">
            <CheckedSVG />
          </Box>
        </MenuItem>
      ))
    )
  }

  const showResetOption = field.showResetOption ?? true;

  return (
    <Box component="div" sx={{ ...muiStyles.fieldContainer }}>
      <FormControl sx={{ m: 0, width: withDefaultSize ? DEFAULT_SELECT_MAX_WIDTH : '100%' }}>
        {/* <FormControl sx={{ m: 0, width: withDefaultSize ? DEFAULT_SELECT_MAX_WIDTH : {xs: 'calc(100% - 24px)', sm: '100%'} }}> */}
        <Select
          value={searchTerm || []}
          onChange={handleOnChang}
          name={field.id}
          displayEmpty
          sx={{ ...muiStyles.select }}
          multiple={field.multiple}
          IconComponent={ArrowMoreV2}
          size={field.size || 'small'}
          disabled={field.disabled}
          MenuProps={{
            PaperProps: {
              sx: {
                ...(field.multiple ? muiStyles.dropdownBlockMultiselect : muiStyles.dropdownBlock), ...(!showResetOption && muiStyles.dropdownHideResetOpt),
                maxHeight: ITEM_HEIGHT * (field.maxItemCount || 4.7),
                ...(withDefaultSize && { width: DEFAULT_SELECT_MAX_WIDTH, minWidth: DEFAULT_SELECT_MIN_WIDTH }),
                ...(field.sxPaperProps && field.sxPaperProps)
              },
            },
          }}
          renderValue={field.multiple ? (selected: string[] = []) => {
            const selectedOptions = optionsList?.filter((i: any) => selected.includes(i.value) || selected.includes(`${i.value}`));
            if (Array.isArray(selected)) {
              if (!selected.length) {
                return (<EmptyMenuItem />);
              }
              if (selected.length === optionsList.length && field.selectAll && field.selectAllLabel) {
                return t(field.selectAllLabel);
              }
              const result = selectedOptions?.map((i: any) => `${i.label}`);
              return result.length ? result?.join(', ') : (<EmptyMenuItem />);
            }
            return selected;
          } : (selected: any) => {
            if (!selected.length) {
              return (<EmptyMenuItem />)
            }
            const selectedOption: any = optionsList?.find((i: any) => selected[0] === i.value || selected[0] === `${i.value}`);
            return selectedOption?.label;
          }}
        >
          {!field.multiple &&
            <MenuItem value="" key='empty' sx={{ height: '40px' }}>
              <Box component="em" sx={{ color: 'primary.textColor6', fontStyle: 'normal', fontSize: '14px' }}>
                <div>{field.insteadNone || t('filter.none')}</div>
              </Box>
            </MenuItem>}
          {field.multiple && field.selectAll && (
            <MenuItem value="all" disableRipple sx={{ ...muiStyles.option, backgroundColor: 'inherit', height: '40px', p: 0, '&:not(:last-child)': { mb: '4px' } }}>
              <Checkbox
                disableRipple
                checked={optionsList.length > 0 && optionsList.length === searchTerm.length}
                indeterminate={searchTerm.length > 0 && searchTerm.length < optionsList.length}
                checkedIcon={<CheckboxSelectedSVG />}
                icon={<CheckboxNotSelectedSVG />}
                indeterminateIcon={<CheckboxIndeterminateSVG />}
              />
              <Box> <ListItemText primary={t(field.selectAllLabel as string)} /> </Box>
            </MenuItem>
          )}
          {field.multiple && field.currentUserOption && currentUser && (
            <MenuItem value={currentUser.uuid} disableRipple sx={{ ...muiStyles.option, backgroundColor: 'inherit', height: '40px', p: 0, '&:not(:last-child)': { mb: '4px' } }}>
              <Checkbox
                disableRipple
                checked={optionsList.length > 0 && optionsList.length === searchTerm.length}
                indeterminate={searchTerm.length > 0 && searchTerm.length < optionsList.length}
                checkedIcon={<CheckboxSelectedSVG />}
                icon={<CheckboxNotSelectedSVG />}
                indeterminateIcon={<CheckboxIndeterminateSVG />}
              />
              <Box> <ListItemText primary={t(field.currentUserOptionLbl as string)} /> </Box>
            </MenuItem>
          )}
          {rerenderOptions()}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomFilterSelect;