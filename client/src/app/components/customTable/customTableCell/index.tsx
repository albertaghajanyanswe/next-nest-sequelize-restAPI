'use client';
import React, { memo } from 'react';
import { Tooltip, TableCell, Typography, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { getCellPadding } from '../config/tableStyleHelper';
import TableConfigs from '../config/tableConfigs';

import EmptyStateSvg from '../../../assets/table-empty-state.svg';
import { muiStyles } from './styles';
import { globalMuiStyles } from '../../../globalMuiStyles';
import { useTranslation } from 'react-i18next';
import { iTableField } from '@/configs/shared/types';

interface iProps<Row> {
  cellItem?: iTableField;
  data?: Row;
  isEditAction?: boolean;
  isDeleteAction?: boolean;
  isEmptyCell?: boolean;
  loading?: boolean;
  handleClickIcon?: (values: Row) => void,
  filteredParams?: any;
  emptyStateTitle?: string;
  emptyStateDesc?: string;
  actionColumnCallback?: any;
}
function CustomTableCell<Row>({
  isEditAction,
  isDeleteAction,
  isEmptyCell,
  cellItem,
  data,
  loading,
  handleClickIcon,
  filteredParams,
  emptyStateTitle,
  emptyStateDesc,
  actionColumnCallback
}: iProps<Row>) {

  const { t } = useTranslation();
  const onActionIconClick = (e: any, values: any) => {
    e.stopPropagation();
    if (handleClickIcon && typeof handleClickIcon === 'function') {
      handleClickIcon(values);
    }
  };

  const isSortedField = () => filteredParams.params?.sort?.field === cellItem?.id || (cellItem?.orderField && filteredParams.params?.sort?.field === cellItem.orderField);

  const cellView = () => {
    if (isEmptyCell) {
      return (
        <TableCell
          style={getCellPadding(
            TableConfigs.defaultCellPadding,
            TableConfigs.defaultCellPadding
          )}
          colSpan={20}
        >
          {!loading ? (emptyStateTitle && emptyStateDesc) ? (
            <Box sx={{ ...muiStyles.emptyBlock, width: '100%', mt: '32px' }}>
              <Box sx={{ ...muiStyles.emptyBlock, maxWidth: '376px' }}>
                <EmptyStateSvg />
                <Typography sx={{...muiStyles.noResult, textAlign: 'center', ...globalMuiStyles.font_16_20_600, color: 'primary.textColor1', mt: 2 }}>{emptyStateTitle}</Typography>
                <Typography sx={{...muiStyles.noResult, textAlign: 'center', ...globalMuiStyles.font_16_24_300, color: 'primary.textColor3', mt: 1 }}>{emptyStateDesc}</Typography>
              </Box>
            </Box>
          ): (
              <Typography sx={muiStyles.noResult}>{t('tableNoResult')}</Typography>
      ) : null
    }
        </TableCell >
      );
}
if (isEditAction) {
  return (
    <TableCell
      align="left"
      onClick={(e) => onActionIconClick(e, data)}
      sx={muiStyles.tableCellAction}
    >
      <Tooltip title={t('edit')}>
        <EditIcon color="primary" />
      </Tooltip>
    </TableCell>
  );
}

if (isDeleteAction) {
  return (
    <TableCell
      align="left"
      onClick={(e) => onActionIconClick(e, data)}
      sx={muiStyles.tableCellAction}
    >
      <Tooltip title={t('delete')}>
        <HighlightOffIcon color="error" />
      </Tooltip>
    </TableCell>
  );
}
if (cellItem?.type === 'customComponent') {
  return cellItem.component({ data, cellItem, isSortedCeil: isSortedField(), onActionIconClick, actionColumnCallback });
}

return (
  <TableCell
    sx={muiStyles.tableCellItem}
    style={getCellPadding(
      cellItem?.cellPaddingRight || '',
      cellItem?.cellPaddingLeft || ''
    )}
    align={cellItem?.textAlign || 'left'}
  >
    {data ? data[cellItem?.id as keyof typeof data] as unknown as React.ReactNode : null}
  </TableCell>
);
  };
return <>{cellView()}</>;
}
export default (memo(CustomTableCell) as typeof CustomTableCell);