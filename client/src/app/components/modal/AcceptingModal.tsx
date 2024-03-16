import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { muiStylesWithTheme } from './styles';
import { useTheme } from '@mui/system';
import CustomModal from '@/app/components/modal/CustomModal';
import CustomButton from '@/app/components/customButton';
import { useTranslation } from 'react-i18next';

function AcceptingModal(
  {
    isOpen,
    closeModal,
    handleCancel,
    handleSubmit,
    title,
    description = '',
    submitText = '',
    cancelText = ''
  }: {
    isOpen: boolean;
    closeModal: () => void;
    handleCancel: () => void;
    handleSubmit: () => void;
    title: string;
    description?: string;
    submitText?: string;
    cancelText?: string;
  }
) {
  const { t } = useTranslation();
  const theme = useTheme();
  const muiStyles = muiStylesWithTheme(theme);
  return (
    <CustomModal
      open={isOpen}
      handleClose={closeModal}
      withFooterAction={false}
      withCloseButton={false}
      withDividers={false}
      sxTitleRoot={muiStyles.modalTitleRoot}
      sxTitle={muiStyles.modalTitle}
      sx={muiStyles.modalRoot}
      closeBtnStyle='secondary'
    >
      <Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
          <Typography sx={{ ...muiStyles.modalTitleTxt, textAlign: 'center', mb: !description ? 3 : 0 }}>{title}</Typography>
        </Box>
        {description && <Typography sx={{ ...muiStyles.modalDescTxt, textAlign: 'center', mb: 3 }}>{description}</Typography>}
        <Grid container columnSpacing={2}>
          <Grid item xs={12} sm={6}>
            <CustomButton
              label={cancelText || t('cancel')}
              btnType='secondary'
              sx={muiStyles.cancelBtn}
              onClick={handleCancel}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomButton
              label={submitText || t('submit')}
              btnType='primary'
              sx={muiStyles.removeBtn}
              onClick={handleSubmit}
            />
          </Grid>
        </Grid>
      </Box>

    </CustomModal>
  )
}

export default AcceptingModal;