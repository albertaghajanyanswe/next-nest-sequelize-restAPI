'use client';
import React from 'react';
import Box from '@mui/material/Box';
import { MenuItem, Pagination, Select, Typography } from '@mui/material';
import { muiStyles } from './styles';
import { ArrowMorePagination } from '@/app/graphics/ArrowMorePagination';
import { useTranslation } from 'react-i18next';

interface TablePaginationActionsProps {
  rowsPerPageOptions: number[];
  count: number;
  rowsPerPage: number;
  page: number;
  onPageChange: (e: React.ChangeEvent<any>, newPage: number) => void;
  onRowsPerPageChange: (event: any) => void;
  isSticky?: boolean;
  handleFooterRef?: any;
}

const ITEM_HEIGHT = 30;

function TablePaginationComponent(props: TablePaginationActionsProps) {
  const {
    rowsPerPageOptions,
    count,
    rowsPerPage,
    page,
    onPageChange,
    onRowsPerPageChange,
    isSticky,
    handleFooterRef
  } = props;

  const { t } = useTranslation();
  const generateText = (first: number, second: number, allCount: number) => t('tableShowingItems').replace('{first}', `${first}`).replace('{second}', `${second}`).replace('{count}', `${allCount}`);

  const text = count === 0 ? generateText(0, 0, 0) :
    count < rowsPerPage ? generateText(1, count, count) :
      Math.ceil(count / rowsPerPage) === page + 1 ? generateText(page * rowsPerPage + 1, count, count) :
        generateText(page === 0 ? 1 : page + rowsPerPage, (page + 1) * rowsPerPage, count);

  return (
    <Box sx={{...muiStyles.root, ...(isSticky && muiStyles.sticky)}} ref={handleFooterRef}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', p: '4px 0' }}>
        <Typography sx={{ ...muiStyles.info, mr: 1 }}>{t('tableRowPerPage')}</Typography>
        <Select
          size='small'
          value={rowsPerPage}
          onChange={onRowsPerPageChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={muiStyles.select}
          IconComponent={ArrowMorePagination}
          MenuProps={{
            PaperProps: {
              sx: { ...muiStyles.dropdown, maxHeight: ITEM_HEIGHT * 4.4 }
            },
          }}
        >
          {rowsPerPageOptions.map(opt => (
            <MenuItem key={opt} value={opt}>{opt}</MenuItem>
          ))}
        </Select>
        <Typography sx={{ ...muiStyles.info, ml: '12px', fontWeight: 400, opacity: 0.5 }}>{text}</Typography>

      </Box>
      <Box>
        <Pagination sx={muiStyles.pagination} shape="rounded" count={Math.ceil(count / rowsPerPage)} size="small" page={page + 1} onChange={(e, pageNumber) => onPageChange(e, pageNumber - 1)} />
      </Box>
    </Box>
  );
}

export default TablePaginationComponent;