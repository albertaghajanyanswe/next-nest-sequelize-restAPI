'use client';
import { useCallback, useRef } from 'react';
import qs from 'qs';
import { iFilter, iFilterParams, iSearch, iSort } from '../../configs/shared/types';
import { useRouter, usePathname } from 'next/navigation';

const useQueryParams = ({ pageDefaultParams }: { pageDefaultParams?: iFilterParams }) => {

  const router = useRouter();
  const pathname = usePathname();
  console.log('pathname = ', pathname)
  const pageParams = qs.parse(location && location.search.split('?')[1], { ignoreQueryPrefix: true, arrayLimit: Infinity });

  const tableFilter = useRef(
    {
      params: {
        sort: ((pageParams?.sort || (pageDefaultParams !== undefined ? pageDefaultParams.params.sort : { field: "id", order: "asc" }) )as unknown as iSort),
        filter: (pageParams?.filter || (pageDefaultParams !== undefined ? pageDefaultParams.params.filter : {})) as unknown as iFilter,
        limit: Number(pageParams?.limit) || (pageDefaultParams !== undefined ? pageDefaultParams.params.limit : 10),
        skip: Number(pageParams?.skip) || (pageDefaultParams !== undefined ? pageDefaultParams.params.skip : 0),
        search: ((Number(pageParams?.search) || (pageDefaultParams !== undefined ? pageDefaultParams.params.search : {})) as unknown as iSearch),
      }
    } as iFilterParams
  );

  const replacePath = (newQuery: any) => {
    const search = qs.stringify({ ...newQuery }, { skipNulls: true });
    console.log('search = ', search)
    router.push(`${pathname}?${search}`)
    // router.push({
    //   pathname: router.pathname,
    //   query: search
    // })
  };

  const setFilteredParams = useCallback(
    (newParams: iFilterParams) => {
      replacePath(newParams.params);
      tableFilter.current = { ...tableFilter.current, params: newParams.params };
    },
    []
  );

  return { queryParams: tableFilter.current, setFilteredParams }
};

export default useQueryParams;