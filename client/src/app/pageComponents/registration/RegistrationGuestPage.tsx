'use client'
import React, { useCallback } from 'react';

import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import { FormProvider, useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';

import { getMessage } from "@/configs/shared/helpers/helper";
import { usersAPI } from '@/services/rtk/UsersApi';
import { routes } from '@/configs';
import { iRegistrationGuest } from '@/configs/shared/types';
import { DEFAULT_VALUES_REGISTRATION } from '@/configs/shared/defaultValues';
import ArrowLeft from '@/assets/arrow-left.svg';
import CustomButton from '@/app/components/customButton';
import SystemMessage from '@/app/components/systemMessage';
import RegistrationForm from '@/app/pageComponents/registration/components/RegistrationForm';
import { stylesWithTheme } from "./styles";
import { useRouter } from 'next/navigation';


const RegistrationGuestPage = () => {

  const { t } = useTranslation();
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();

  const styles = stylesWithTheme(theme);
  const router = useRouter();

  const methods = useForm({
    defaultValues: DEFAULT_VALUES_REGISTRATION,
    mode: 'onChange'
  });

  const { handleSubmit } = methods;

  const [registerGuest] = usersAPI.useRegisterGuestMutation();

  const handleSubmitRegistration = useCallback(() => handleSubmit(async (data) => {
    try {
      await registerGuest(data as iRegistrationGuest).unwrap();
      // toast.success(getMessage('', 'success'));
      SystemMessage(enqueueSnackbar, getMessage('', 'success'), { variant: 'success', theme });
      router.push(routes.login.path)
    } catch (error: any) {
      // toast.error('error');
      SystemMessage(enqueueSnackbar, getMessage(error), { variant: 'error', theme });
    }
    return true
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }), []);

  return (
    <Box sx={styles.layout}>
      <Box sx={styles.container} p={4}>
        <FormProvider {...methods}>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography color="primary" variant="h5">{t('signUpAsGuest')}</Typography>
              </Grid>
              <RegistrationForm handleSubmit={handleSubmitRegistration} />
              <Grid item xs={12}>
                <CustomButton
                  href={routes.login.path}
                  label={t('signUp')}
                  btnType='secondary'
                  sx={{ width: '100%', p: '8px 12px', fontSize: '16px', lineHeight: '24px', fontWeight: 600 }}
                  startIcon={<ArrowLeft />}
                />
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
};

export default RegistrationGuestPage;