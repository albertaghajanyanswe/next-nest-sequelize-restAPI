'use client';
import TablePaginationComponent from "@/app/components/customTable/customPaginationComponent";
import { iFilterParams } from "@/configs/shared/types";
import { useState } from "react";

function CustomPagination({
  rowsPerPageOptions,
  count,
  filteredParams,
  setFilteredParams,
  handleFooterRef
}: {
  rowsPerPageOptions: number[],
  count: number,
  filteredParams: iFilterParams;
  setFilteredParams: (params: iFilterParams) => void;
  handleFooterRef?: (el: HTMLDivElement | null) => void;

}) {
  const { limit, skip } = filteredParams?.params;
  const page = skip / limit;
  const [rowsPerPage, setRowsPerPage] = useState(limit);

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

  return (
    <TablePaginationComponent
      rowsPerPageOptions={rowsPerPageOptions}
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      isSticky
      handleFooterRef={handleFooterRef}
    />
  )
}

export default CustomPagination;