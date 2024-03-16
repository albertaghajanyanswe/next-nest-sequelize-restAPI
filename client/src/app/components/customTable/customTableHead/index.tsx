'use client';
import React, { FC, memo } from 'react';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import { getCellPadding, getWidth } from '@/app/components/customTable/config/tableStyleHelper';
import TableConfigs from '../config/tableConfigs';

// import {ReactComponent as TableArrowsSVG} from '../../../assets/16/table-arrows.svg';
import { muiStyles } from './styles';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/system';
import { iTableField } from '@/configs/shared/types';

interface iSortObj {
  order: any;
  field: string;
}
interface iProps {
  sortObj: iSortObj,
  onRequestSort: ((e: any, property: string) => void) | null;
  rowCount: number;
  fields: iTableField[];
  filteredParams: any;
  withEditAction: boolean;
  withDeleteAction: boolean;
}

const CustomTableHead: FC<iProps> = (props) => {
  const {
    sortObj,
    onRequestSort,
    rowCount,
    fields,
    filteredParams,
    withEditAction,
    withDeleteAction,
  } = props;

  const { t } = useTranslation();
  const createSortHandler = (property: string) => (event: any) => {
    if (onRequestSort) {
      onRequestSort(event, property);
    }
  };
  const theme = useTheme();

  return (
    <TableHead>
      <TableRow sx={muiStyles.tableHeadRow}>
        {fields.map((headCell: any) => {
          if (headCell.id !== 'action') {
            const id = headCell.orderField || headCell.id;
            const { cellPaddingRight, cellPaddingLeft } =
              rowCount > 0
                ? headCell
                : {
                  cellPaddingRight: TableConfigs.defaultCellPadding,
                  cellPaddingLeft: TableConfigs.defaultCellPadding,
                };
            return (
              <TableCell
                key={id}
                sortDirection={sortObj.field === id ? sortObj.order : false}
                style={{
                  ...getWidth(headCell.width),
                  ...getCellPadding(cellPaddingRight, cellPaddingLeft),
                }}
                align={headCell.headAlign || 'left'}
              >
                {headCell.sortable && (
                  <TableSortLabel
                    sx={{...muiStyles.sortLbl, ...(filteredParams?.params?.sort?.field === id && { color: `${theme.palette.primary.textColor1}!important`})}}
                    // IconComponent={TableArrowsSVG}
                    active={filteredParams?.params?.sort?.field === id}
                    direction={
                      filteredParams?.params?.sort?.field === id
                        ? filteredParams.params.sort.order
                        : 'asc'
                    }
                    onClick={createSortHandler(id)}
                  >
                    {t(headCell.label)}
                  </TableSortLabel>
                )}
                {!headCell.sortable && t(headCell.label)}
              </TableCell>
            );
          } else {
            return <TableCell key={headCell.id} style={{ width: headCell.width, paddingRight: '16px', paddingLeft: '16px' }} />
          }
        })}
        {withEditAction && (<TableCell style={{ width: '24px', paddingRight: '16px', paddingLeft: '24px' }} />)}
        {withDeleteAction && (<TableCell style={{ width: '24px', paddingRight: '16px', paddingLeft: '24px' }} />)}
      </TableRow>
    </TableHead>
  );
}

export default memo(CustomTableHead);
