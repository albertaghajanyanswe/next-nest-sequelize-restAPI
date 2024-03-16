'use client';
import React, { useState, useMemo, memo, useCallback } from 'react';
import { Table, TableBody, TableRow, TableContainer, Paper, Skeleton, Box, Tooltip } from '@mui/material';
import CustomTableHead from './customTableHead';
import CustomTableCell from './customTableCell';
import TablePaginationComponent from './customPaginationComponent';

import { muiStyles } from './styles';
import { useTranslation } from 'react-i18next';
import { iTableField, iTableSources } from '@/configs/shared/types';

// const ArrowMore = (props: any) => (
//   <svg {...props} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M4 6.3125L8 10.3125L12 6.3125" stroke="#728191" strokeLinecap="round" strokeLinejoin="round" />
//   </svg>
// );

interface iTableOptions {
  fields: iTableField[];
  rowsPerPageOptions: number[];
  searchFields: any;
}

interface iProps<Row, Key> {
  tableSources: iTableSources<Row>;
  tableOptions: iTableOptions;
  filteredParams: any;
  setFilteredParams: (filters: any) => void;
  handleRowClick?: (row: Row) => void;
  loading?: boolean;
  handleEditAction?: (values: Row) => void;
  handleDeleteAction?: (values: Row) => void;
  rowUniqueKey: Key,
  handleClickIcon?: (row: Row) => void;
  toolbarView?: React.ReactNode;
  withPagination?: boolean;
  withBorders?: boolean;
  isSticky?: boolean;
  sxTableContainer?: any;
  maxHeightMinus?: number;
  handleFooterRef?: (el: HTMLDivElement | null) => void;
  emptyStateTitle?: string;
  emptyStateDesc?: string;
  actionColumnCallback?: any;
}

function CustomTable<Row, Key extends keyof Row>({
  tableSources,
  tableOptions,
  loading,
  filteredParams,
  setFilteredParams,
  handleEditAction,
  handleDeleteAction,
  rowUniqueKey,
  handleClickIcon,
  handleRowClick,
  toolbarView,
  withPagination = true,
  withBorders = false,
  isSticky,
  sxTableContainer = {},
  maxHeightMinus,
  handleFooterRef,
  emptyStateTitle = '',
  emptyStateDesc = '',
  actionColumnCallback
}: iProps<Row, Key>) {
  const { t } = useTranslation();
  const { limit, skip } = filteredParams?.params;
  const page = parseInt(skip, 10) / parseInt(limit, 10);
  const [rowsPerPage, setRowsPerPage] = useState(parseInt(limit, 10));

  const sortObj = filteredParams?.params?.sort || {};
  const { order, field: orderBy } = sortObj;

  const { fields, rowsPerPageOptions } = tableOptions;
  const { data: tableData, count } = tableSources;

  const handleRequestSort = useCallback(
    (e: any, property: string) => {
      const isAsc = orderBy === property && order === 'asc';
      const newFilter = {
        params: {
          ...filteredParams.params,
          sort: { field: property, order: isAsc ? 'desc' : 'asc' },
          skip: 0,
        },
      };
      setFilteredParams(newFilter);
    },
    [filteredParams.params, setFilteredParams, order, orderBy]
  );

  const handleChangePage = (e: any, newPage: number) => {
    const newFilter = {
      params: {
        ...filteredParams.params,
        skip: newPage * filteredParams.params.limit,
      },
    };
    setFilteredParams(newFilter);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    const newFilter = {
      params: {
        ...filteredParams.params,
        skip: 0,
        limit: parseInt(event.target.value, 10),
      },
    };
    setFilteredParams(newFilter);
  };

  const onTableRowClick = (row: Row) => {
    if (handleRowClick) {
      return handleRowClick(row);
    }
  }

  const renderCustomTableCell = useMemo(() => {
    return tableData?.map((row: any) => (
      <Tooltip key={row[rowUniqueKey]} title={(typeof handleRowClick === 'function') ? t('clickToRow') : ''}>
        <TableRow
          onClick={() => onTableRowClick(row)}
          key={row[rowUniqueKey]}
          sx={{ ...muiStyles.tableRow, ...((typeof handleRowClick === 'function') && muiStyles.clickableRow) }}
        >
          {fields.map((item: iTableField, index) => (
            <CustomTableCell<Row>
              key={index}
              handleClickIcon={handleClickIcon}
              cellItem={item}
              data={row}
              filteredParams={filteredParams}
              actionColumnCallback={actionColumnCallback}
            />
          ))}
          {handleEditAction && (
            <CustomTableCell<Row>
              key={`${row[rowUniqueKey]}-edit`}
              handleClickIcon={handleEditAction}
              data={row}
              isEditAction
            />
          )}
          {handleDeleteAction && (
            <CustomTableCell<Row>
              key={`${row[rowUniqueKey]}-delete`}
              handleClickIcon={handleDeleteAction}
              data={row}
              isDeleteAction
            />
          )}
        </TableRow>
      </Tooltip>
    ));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fields, tableData, handleClickIcon, handleEditAction]);

  return (
    <Box component="div" sx={{ ...muiStyles.border }}>
      <Paper sx={{ ...(!withBorders ? muiStyles.paperRootNoBorder : {}) }}>
        {toolbarView && toolbarView}
        <TableContainer sx={{ ...muiStyles.tableContainer, ...muiStyles.customScroll, ...sxTableContainer, maxHeight: isSticky ? `calc(100vh - ${maxHeightMinus}px)` : '100%' }}>
          {loading ? (
            <div>
              <Skeleton height="80px" width="100%" animation="pulse" />
              <Skeleton sx={{ mt: '-24px' }} height="200px" width="100%" animation="pulse" />
            </div>
          ) : (
            <Table stickyHeader={isSticky} sx={muiStyles.table} size="small" padding="checkbox">
              <CustomTableHead
                sortObj={sortObj}
                onRequestSort={tableData?.length > 0 ? handleRequestSort : null}
                rowCount={tableData?.length}
                fields={fields}
                filteredParams={filteredParams}
                withEditAction={(!!tableData?.length && (typeof handleEditAction === 'function')) ? true : false}
                withDeleteAction={(!!tableData?.length && (typeof handleDeleteAction === 'function')) ? true : false}
              />
              <TableBody sx={loading ? muiStyles.tableBody : {}}>
                {renderCustomTableCell}
                {!tableData?.length && (
                  <TableRow style={{ height: 60 }}>
                    <CustomTableCell<Row> isEmptyCell loading={loading} emptyStateTitle={emptyStateTitle} emptyStateDesc={emptyStateDesc} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          )}
        </TableContainer>
        {(withPagination && !loading) && (
          <TablePaginationComponent
            rowsPerPageOptions={rowsPerPageOptions}
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            isSticky={isSticky}
            handleFooterRef={handleFooterRef}
          />)}
        {/* {(withPagination && !loading && tableData?.length > 0) && (
          <TablePagination
            component='div'
            rowsPerPageOptions={rowsPerPageOptions}
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
            SelectProps={{
              IconComponent: ArrowMore,
            }}
          />
        )} */}
      </Paper>
    </Box>
  );
}

export default memo(CustomTable) as unknown as typeof CustomTable;