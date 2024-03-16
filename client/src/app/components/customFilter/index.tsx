import React from 'react';
import { Grid } from '@mui/material';
import CustomFilterFormItem from './customFilterFormItem';
import { iFilterDatePickerField, iFilterParams, iFilterSelectField, iFilterSortField, iFilterTextField } from '../../configs/shared/types';

interface iProps {
  onFilterCallback: ((filterObj: {[key: string]: any}) => void) | null;
  filterFields: readonly (iFilterTextField | iFilterSelectField | iFilterDatePickerField | iFilterSortField)[];
  filteredParams: iFilterParams;
  sizes?: {xs?: number, sm?: number, md?: number, lg?: number},
  onSortCallback?: (sortObj: {field: string, order: 'asc' | 'desc' | ''}) => void;
}

function CustomFilter({
  onFilterCallback,
  filterFields = [],
  filteredParams,
  sizes,
  onSortCallback
}: iProps) {


  const fieldsView = filterFields.map((field) => {
    const isSort = field.type === 'sortField';
    return (
      <Grid item key={field.id} xs={sizes?.xs} sm={sizes?.sm} md={isSort ? 2 : sizes?.md} lg={isSort ? 2 : sizes?.lg}>
        <CustomFilterFormItem
          field={field}
          onFilterCallback={onFilterCallback}
          searchValue={filteredParams?.params.filter?.[field.id] || ''}
          sortValue={
            [
              ...(filteredParams?.params?.sort?.field ? [filteredParams.params.sort.field] : []),
              ...(filteredParams?.params?.sort?.order ? [filteredParams.params.sort.order] : []),
            ] || []
          }
          withDefaultSize={!sizes?.xs}
          onSortCallback={onSortCallback}
        />
      </Grid>
    )
  });

  return (
    <Grid container rowSpacing={1} columnSpacing={2} sx={{ mt: 0 }}>
      {fieldsView}
    </Grid>
  );
};

export default CustomFilter;