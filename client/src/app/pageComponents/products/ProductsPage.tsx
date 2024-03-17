'use client';
import React, { useMemo } from 'react';
import { Box } from '@mui/material';
import { useSnackbar } from 'notistack';
import { muiStylesWithTheme } from './styles';
import { useTheme } from '@mui/material/styles';
import ProductsLayout from './ProductsLayout';
import { useRouter } from 'next/navigation';
import { getCurrentUser } from '@/services/lsService';
import { iFilterParams } from '@/configs/shared/types';
import useQueryParams from '@/hooks/common/useQueryParams';
import { productsAPI } from '@/services/rtk/ProductsApi';
import { ProductsDataType, adaptProductsData } from '@/configs/shared/helpers/adapter';
import { routes } from '@/configs';
import Loading from '@/app/components/loading';

function ProductsPage() {
  const router = useRouter();
  const theme = useTheme();
  const muiStyles = muiStylesWithTheme(theme);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { enqueueSnackbar } = useSnackbar()

  const currentUser = getCurrentUser()?.user;

  const pageDefaultParams = {
    params: {
      sort: { field: 'createdAt', order: "asc" },
      filter: {},
      limit: 10,
      skip: 0,
    }
  } as iFilterParams;


  const { queryParams, setFilteredParams } = useQueryParams({ pageDefaultParams });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { skip, limit, filter, sort, search } = queryParams.params;
  const { intendedFor_in, ...restFilter} = filter;

  const { data, isLoading, refetch } = productsAPI.useGetAllProductsQuery({
    ...queryParams.params,
    filter: {
      ...restFilter,
      ...(intendedFor_in && intendedFor_in.length > 0 && { intendedFor_in: intendedFor_in })
    }
  });

  const { data: productsList, count} = data || {rows: [], count: 0};
  const memoTableSource = useMemo(() => ({ data: adaptProductsData(productsList || []), count }), [productsList, count]);

  const handleOnRowClick = (row: ProductsDataType) => {
    router.push(routes.productEdit.path.replace(':id', `${row.id}`));
  };

  const toolbarMinHeight = theme.breakpoints.up('md') ? 64 : 56;

  return (currentUser && !isLoading) ? (
    <Box component='div' sx={{ ...muiStyles.root, height: `calc(100% - ${toolbarMinHeight}px)` }}>
      <ProductsLayout<ProductsDataType>
      loading={isLoading}
      filteredParams={queryParams}
      setFilteredParams={setFilteredParams}
      handleRowClick={handleOnRowClick}
      tableSources={memoTableSource}
      handleRefetch={refetch}/>
    </Box>
  ) : (
    <Loading />
  );
};

export default ProductsPage;