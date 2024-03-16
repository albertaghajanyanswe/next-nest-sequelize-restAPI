'use client';
import React from 'react';
import FilterTextField from './filterTextField';
import FilterSelectField from './filterSelect';
import FilterDateTimePickerField from './datePicker';
import CustomSortField from './sortField';
import { iFilterDatePickerField, iFilterSelectField, iFilterSortField, iFilterTextField } from '@/configs/shared/types';

const textFieldList = ['text', 'date', 'number'] as const;
const selectList = ['select'] as const;
const datePickerList = ['date-time-picker'] as const;
const sortFieldList = ['sortField'] as const;

interface iProps {
  field: iFilterTextField | iFilterSelectField | iFilterDatePickerField | iFilterSortField;
  onFilterCallback: ((filterObj: {[key: string]: any}) => void) | null;
  searchValue: any;
  withDefaultSize: boolean;
  onSortCallback?: (sortObj: {field: string, order: 'asc' | 'desc' | ''}) => void;
  sortValue?: string[];
}

function testField<T extends readonly string[]>(field: any, types: T): field is {type: T[number]} {
  return types.includes(field.type);
}

function CustomFilterFormItem({
  field,
  onFilterCallback,
  searchValue,
  withDefaultSize,
  onSortCallback,
  sortValue
}: iProps) {

  return (
    testField(field, textFieldList) ? (
      <FilterTextField
        field={field}
        onFilterCallback={onFilterCallback}
        searchValue={searchValue}
        withDefaultSize={withDefaultSize}
      />
    ) : testField(field, selectList) ? (
      <FilterSelectField
        field={field}
        onFilterCallback={onFilterCallback}
        searchValue={searchValue}
        withDefaultSize={withDefaultSize}
      />
    ) : testField(field, datePickerList) ? (
      <FilterDateTimePickerField
        field={field}
        onFilterCallback={onFilterCallback}
        searchValue={searchValue}
        withDefaultSize={withDefaultSize}
      />
    ) : testField(field, sortFieldList) ? (
      <CustomSortField
        field={field}
        onFilterCallback={onFilterCallback}
        searchValue={searchValue}
        withDefaultSize={withDefaultSize}
        onSortCallback={onSortCallback}
        sortValue={sortValue}
      />
    ) : null
  )
};

export default CustomFilterFormItem;