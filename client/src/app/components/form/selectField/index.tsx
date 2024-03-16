'use client'

import React, { ChangeEvent } from 'react';
import { Box, Checkbox, FormControl, FormHelperText, InputAdornment, ListSubheader, MenuItem, Radio, Select, Tooltip, Typography } from '@mui/material';
import { FieldValues, Path, useController, useFormContext } from "react-hook-form";
import CheckedSVG from '@/assets/select/select-item-checked-small.svg';
import CheckboxSelectedSVG from '@/assets/select/checkbox-selected.svg';
import CheckboxNotSelectedSVG from '@/assets/select/checkbox-not-selected.svg';
import InputError from '@/assets/form/input-error.svg';
import CheckboxDefault from '@/assets/24/radio.svg';
import CheckboxActive from '@/assets/24/radio-checked.svg';
import CheckboxDefaultSmall from '@/assets/16/radio.svg';
import CheckboxActiveSmall from '@/assets/16/radio-checked.svg';
import { muiStylesWithTheme } from './styles';
import { useTheme } from '@mui/system';
import FormFieldTitle from '@/app/components/form/fieldTitle';
import { globalMuiStylesWithTheme } from '@/app/globalMuiStyles';
import { ArrowMoreV2 } from '@/app/graphics/ArrowMoreV2';

export interface iOptions {
  label: string;
  value?: string;
  label2?: string;
  label3?: string;
  type?: string;
}

const FormSelectField = <T extends FieldValues>({
  rules,
  name,
  placeholder,
  options,
  sx = {},
  sxContainer = {},
  sxDropdown = {},
  variant = 'outlined',
  size = 'small',
  startIcon: StartIcon = null,
  withHelperText = false,
  withErrorIcon = true,
  title = '',
  helperTooltip = '',
  showResetOption = false,
  multiple = false,
  sxTooltip = {},
  withRadioCheckbox = false,
  disabled = false,
  fieldShouldClear,
  selectedValuesInOneLine = true,
  disabledOptions = [],
}: {
  name: Path<T>;
  placeholder: string;
  rules?: any;
  variant?: 'filled' | 'outlined' | 'standard';
  sx?: any;
  sxContainer?: any;
  sxDropdown?: any;
  size?: 'small' | 'medium' | undefined;
  options?: iOptions[];
  startIcon?: any;
  withHelperText?: boolean;
  withErrorIcon?: boolean;
  title?: string;
  helperTooltip?: string;
  showResetOption?: boolean;
  multiple?: boolean;
  sxTooltip?: any;
  withRadioCheckbox?: boolean;
  disabled?: boolean;
  fieldShouldClear?: Path<T> | Path<T>[] | undefined;
  selectedValuesInOneLine?: boolean;
  disabledOptions?: iOptions[];
}) => {
  const theme = useTheme();
  const muiStyles = muiStylesWithTheme(theme);
  const { field: { onChange, value, ref }, fieldState: { error } } = useController({ name, rules })
  const { getValues, setValue } = useFormContext();

  const isOptionDisabled = (option: iOptions) => {
    if (option.value === value) {
      return false;
    }
    if (disabledOptions.length) {
      return disabledOptions.some(i => i.value === option.value);
    }
    return false;
  }
  const rerenderOptions = () => {
    if (multiple) {
      return (
        options?.map((opt) => opt.type === 'group' ? (
          <ListSubheader key={opt.label} sx={muiStyles.listSubheader}>{opt.label}</ListSubheader>
        ) : (
          <MenuItem disableRipple key={opt.value} value={opt.value} sx={{ height: opt.label2 ? '56px' : '40px', p: 0, '&:not(:last-child)': { mb: '4px' }, ...muiStyles.menuItemStyle }} disabled={isOptionDisabled(opt)}>
            <Checkbox
              disableRipple
              checked={value?.indexOf(opt.value) > -1}
              checkedIcon={<CheckboxSelectedSVG />}
              icon={<CheckboxNotSelectedSVG />}
            />
            {(opt.label2 && opt.label3) ? (
              <Box sx={{ display: 'flex', flexDirection: 'row!important', alignItems: 'center', justifyContent: 'space-between', width: '93%' }}>
                <Box sx={{ mr: '4px', width: '80%' }}>
                  <Typography sx={{ ...muiStyles.menuItemOpt, mb: '4px' }}>{opt.label}</Typography>
                  <Typography sx={{ ...muiStyles.menuItemOpt }}>{opt.label2}</Typography>
                </Box>
                <Typography sx={{ ...muiStyles.menuItemOpt, width: '20%', textAlign: 'end' }}>{opt.label3}</Typography>
              </Box>
            ) : opt.label2 ? (
              <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Typography sx={{ ...muiStyles.menuItemOpt, mr: '4px', mb: '4px' }}>{opt.label}</Typography>
                <Typography sx={{ ...muiStyles.menuItemOpt }}>{opt.label2}</Typography>
              </Box>) : (
              <Typography sx={{ ...muiStyles.menuItemOpt, lineHeight: '16px' }}>{opt.label}</Typography>
            )}
            {/* <Box>
              <Box>
                <ListItemText primary={opt.label} sx={{ ...muiStyles.menuItemOpt }} />
                {opt.label2 && <ListItemText primary={opt.label2} sx={{ ...muiStyles.menuItemOpt }} />}
              </Box>
              {opt.label3 && <ListItemText primary={opt.label3} sx={{ ...muiStyles.menuItemOpt }} />}
            </Box> */}
          </MenuItem>)
        ))
    }
    return withRadioCheckbox ? (
      options?.map(opt => opt.type === 'group' ? (
        <ListSubheader key={opt.label} sx={muiStyles.listSubheader}>{opt.label}</ListSubheader>
      ) : (
        <MenuItem disableRipple key={opt.value} value={opt.value} sx={{ ...muiStyles.menuItem, justifyContent: 'start', padding: '10px!important', ...muiStyles.menuItemStyle }} disabled={isOptionDisabled(opt)}>
          <Box component="div" sx={{ mr: '10px' }}>
            <Radio
              checked={value === opt.value}
              value={opt.value}
              size='small'
              sx={{
                padding: 0,
                // ...(size === 'small' && muiStyles.small),
                '& svg': { fontSize: size === 'small' ? 16 : 24 },
                '& .MuiSvgIcon-root': { fontSize: size === 'small' ? 16 : 24 },
              }}
              icon={size === 'small' ? <CheckboxDefaultSmall /> : <CheckboxDefault />}
              checkedIcon={size === 'small' ? <CheckboxActiveSmall /> : <CheckboxActive />}
            />
          </Box>
          {(opt.label2 && opt.label3) ? (
            <Box sx={{ display: 'flex', flexDirection: 'row!important', alignItems: 'center', justifyContent: 'space-between', width: '93%' }}>
              <Box sx={{ mr: '4px', width: '80%' }}>
                <Typography sx={{ ...muiStyles.menuItemOpt, mb: '4px' }}>{opt.label}</Typography>
                <Typography sx={{ ...muiStyles.menuItemOpt }}>{opt.label2}</Typography>
              </Box>
              <Typography sx={{ ...muiStyles.menuItemOpt }}>{opt.label3}</Typography>
            </Box>
          ) : opt.label2 ? (
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Typography sx={{ ...muiStyles.menuItemOpt, mr: '4px', mb: '4px' }}>{opt.label}</Typography>
              <Typography sx={{ ...muiStyles.menuItemOpt }}>{opt.label2}</Typography>
            </Box>
          ) : (
            <Typography sx={{ ...muiStyles.menuItemOpt }}>{opt.label}</Typography>
          )}
        </MenuItem>
      ))
    ) : (
      options?.map(opt => opt.type === 'group' ? (
        <ListSubheader key={opt.label} sx={muiStyles.listSubheader}>{opt.label}</ListSubheader>
      ) : (
        <MenuItem disableRipple key={opt.value} value={opt.value} sx={{ ...muiStyles.menuItem, ...(opt.label2 ? { padding: '8px 12px!important' } : {}), ...muiStyles.menuItemStyle }} disabled={isOptionDisabled(opt)}>
          {(opt.label2 && opt.label3) ? (
            <Box sx={{ display: 'flex', flexDirection: 'row!important', alignItems: 'center', justifyContent: 'space-between', width: '93%' }}>
              <Box sx={{ mr: '4px', width: '80%' }}>
                <Typography sx={{ ...muiStyles.menuItemOpt, mb: '4px' }}>{opt.label}</Typography>
                <Typography sx={{ ...muiStyles.menuItemOpt }}>{opt.label2}</Typography>
              </Box>
              <Typography sx={{ ...muiStyles.menuItemOpt, width: '20%', textAlign: 'end' }}>{opt.label3}</Typography>
            </Box>
          ) : opt.label2 ? (
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Typography sx={{ ...muiStyles.menuItemOpt, mr: '4px', mb: '4px' }}>{opt.label}</Typography>
              <Typography sx={{ ...muiStyles.menuItemOpt }}>{opt.label2}</Typography>
            </Box>) : (
            <Typography sx={{ ...muiStyles.menuItemOpt, lineHeight: '16px' }}>{opt.label}</Typography>
          )}
          <Box className="themeShowInSelected" sx={{ display: 'none' }} component="div">
            <CheckedSVG />
          </Box>
        </MenuItem>
      ))
    )
  }

  const changeDependingFieldValues = (filedKey: Path<T>) => {
    const fieldPath = filedKey?.split('.');
    if (fieldPath.length === 1) {
      setValue(filedKey, '' as any);
    } else {
      // e.g additionalSectors.${index}.value.${fieldName}    index - 0,1,2... fieldName - activity, sector ...
      const mainObjKey = fieldPath[0]; // e.g additionalSectors
      const objIndexKey = fieldPath[1]; // e.g ${index}
      const objPropertyKey = fieldPath[2]; // value
      const fieldNameKey = fieldPath[3]; // ${fieldName}
      const objCopy = JSON.parse(JSON.stringify(getValues()[mainObjKey]));
      if (objIndexKey && objPropertyKey && fieldNameKey) {
        objCopy[objIndexKey][objPropertyKey][fieldNameKey] = '';
      } else {
        objCopy[objIndexKey][objPropertyKey] = '';
      }
      setValue(mainObjKey, objCopy)
    }
  }

  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (fieldShouldClear) {
      if (Array.isArray(fieldShouldClear)) {
        fieldShouldClear.forEach(filedKey => changeDependingFieldValues(filedKey));
      } else {
        changeDependingFieldValues(fieldShouldClear);
      }
    }
    onChange(e);
  }
  return (
    <Box component="div" sx={{ ...muiStyles.fieldContainer, ...sxContainer }}>
      {title && <FormFieldTitle title={title} helperTooltip={helperTooltip} sxTooltip={sxTooltip} />}
      <FormControl sx={{ m: 0, maxWidth: '100%', minWidth: '100%' }} error={Boolean(error?.message)}>
        <Select
          name={name}
          MenuProps={{ PaperProps: { sx: { ...(multiple ? {...muiStyles.dropdownBlockMultiselect, ...globalMuiStylesWithTheme(theme).scroll_3_24_B5C3D3} : {...muiStyles.dropdownBlock, ...globalMuiStylesWithTheme(theme).scroll_3_24_B5C3D3}), ...sxDropdown, ...(!showResetOption && muiStyles.dropdownHideResetOpt) } } }}
          {...(StartIcon && { startAdornment: (<InputAdornment position="start"> <StartIcon /> </InputAdornment>) })}
          fullWidth
          value={value || (multiple ? [] : '')}
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleFieldChange(e)}
          displayEmpty
          sx={{ ...muiStylesWithTheme(theme).select, ...(StartIcon && muiStyles.withStartIconStyle), ...sx, ...(Boolean(error?.message) && withErrorIcon && muiStyles.selectBtnLeft) }}
          size={size}
          inputRef={ref}
          variant={variant}
          IconComponent={ArrowMoreV2}
          endAdornment={
            withErrorIcon && Boolean(error?.message) &&
            <Tooltip title={error?.message as string}>
              <Box sx={{ display: 'flex', cursor: 'pointer', mr: '2px' }}>
                <InputError />
              </Box>
            </Tooltip>
          }
          multiple={multiple}
          renderValue={multiple ? (selected: string[] = []) => {
            const selectedOptions = options?.filter(i => selected.includes(i.value as any));
            if (Array.isArray(selected)) {
              if (!selected.length) {
                return (<em style={{ color: '#878787', fontStyle: 'normal' }}>{placeholder}</em>);
              }
              const result = selectedOptions?.map(i => i.label2 ? `${i.label} ${i.label2}` : `${i.label}`);
              return result?.join(selectedValuesInOneLine ? ', ' : ', \n')
            }
            return selected;
          } : (selected: string) => {
            const res = options?.find(i => selected === i.value);
            if (!res) {
              return (<em style={{ color: '#878787', fontStyle: 'normal' }}>{placeholder}</em>);
            }
            return res.label2 ? `${res.label} ${res.label2}` : res?.label;
          }}
          disabled={disabled}
        >
          {!showResetOption && <MenuItem disableRipple value={multiple ? [] : ""} sx={muiStyles.menuItem}>
            <em style={{ color: '#878787', fontStyle: 'normal' }}>{placeholder}</em>
          </MenuItem>}
          {rerenderOptions()}
        </Select>
        {withHelperText && Boolean(error?.message) && <FormHelperText>{error?.message}</FormHelperText>}
      </FormControl >
    </Box>
  );
};

export default FormSelectField;