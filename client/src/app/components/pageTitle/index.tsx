import React, { ReactNode, useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { muiStyles } from './styles';
import BackSVG from '@/assets/24/back-arrow.svg';
import { iFilterParams } from '@/configs/shared/types';
import { useRouter } from 'next/navigation';
import { routes } from '@/configs';
import CustomSearch from '../customSearch';
import CustomButton from '../customButton';

function PageTitle({
  title,
  withBack = false,
  handlePageHeaderRef,
  onSearchCallback,
  filteredParams,
  actionBtnLabel,
  actionBtnOnClick,
  actionBtnStartSvg
}: {
  title: string,
  withBack?: boolean,
  handlePageHeaderRef?: any,
  onSearchCallback?: ((searchValue: string) => void) | null,
  filteredParams?: iFilterParams,
  actionBtnLabel?: string,
  actionBtnOnClick?: () => void,
  actionBtnStartSvg?: ReactNode
}) {

  const { t } = useTranslation();
  const searchValue = filteredParams?.params?.search?.value || '';
  const router = useRouter();
  const [searchOpened, setSearchOpened] = useState(!!searchValue);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleCreateProduct = () => {
    router.push(routes.productCreate.path);
  }

  const handleBack = () => {
    router.back();
  }

  return (
    <Box component='div' sx={muiStyles.root} ref={handlePageHeaderRef}>
      {!searchOpened &&
        <Box component='div' sx={muiStyles.leftRoot}>
          {withBack && <IconButton sx={{ mr: 1 }} onClick={handleBack}><BackSVG /></IconButton>}
          <Typography sx={muiStyles.title} variant='h1'> {title} </Typography>
        </Box>
      }
      {onSearchCallback && typeof onSearchCallback === 'function' && <CustomSearch
        onSearchCallback={onSearchCallback}
        searchValue={searchValue}
        placeholder={t('common.search')}
        searchOpened={searchOpened}
        setSearchOpened={setSearchOpened}
      />}
      {actionBtnLabel && <CustomButton
        label={actionBtnLabel}
        sx={{ p: '8px 24px', fontSize: '14px', fontWeight: 500 }}
        onClick={actionBtnOnClick}
        variant='outlined'
        btnType='secondary'
        startIcon={actionBtnStartSvg}
      />}
    </Box>
  );
};

export default PageTitle;
