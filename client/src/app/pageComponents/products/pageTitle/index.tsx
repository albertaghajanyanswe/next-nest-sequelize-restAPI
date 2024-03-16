'use client';
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { muiStyles } from './styles';
import { iFilterParams } from '@/configs/shared/types';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { routes } from '@/configs';
import CustomSearch from '@/app/components/customSearch';
import CustomButton from '@/app/components/customButton';
import AddSvg from '@/assets/16/plus.svg';

function PageTitle({
  handlePageHeaderRef,
  onSearchCallback,
  filteredParams,
}: {
  handlePageHeaderRef?: any,
  onSearchCallback?: ((searchValue: string) => void) | null,
  filteredParams?: iFilterParams,
}) {

  const { t } = useTranslation();
  const searchValue = filteredParams?.params?.search?.value || '';
  const router = useRouter();
  const [searchOpened, setSearchOpened] = useState(!!searchValue);

  const handleCreateProduct = () => {
    router.push(routes.productCreate.path);
  }

  return (
    <Box component='div' sx={muiStyles.root} ref={handlePageHeaderRef}>
      {!searchOpened && <Box component='div' sx={muiStyles.leftRoot}>
        <Typography sx={muiStyles.title} variant='h1'> {t('products')} </Typography>
      </Box>}
      {onSearchCallback && typeof onSearchCallback === 'function' && <CustomSearch
        onSearchCallback={onSearchCallback}
        searchValue={searchValue}
        placeholder={t('search')}
        searchOpened={searchOpened}
        setSearchOpened={setSearchOpened}
      />}
      <CustomButton
        label={t('createProduct')}
        sx={{ p: '8px 24px', fontSize: '14px', fontWeight: 500 }}
        onClick={handleCreateProduct}
        variant='outlined'
        btnType='secondary'
        startIcon={<AddSvg />}

      />
    </Box>
  );
};

export default PageTitle;
