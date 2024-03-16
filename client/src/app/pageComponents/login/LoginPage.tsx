'use client'

import React, { useCallback } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { DEFAULT_VALUES_LOGIN } from '@/configs/shared/defaultValues';
import { usersAPI } from '@/services/rtk/UsersApi';
import { getMessage } from "@/configs/shared/helpers/helper";
import { lsConstants } from '@/configs/shared/constants';
import { routes } from '@/configs';
import { iLogin } from '@/configs/shared/types';
import LoginForm from './components/LoginForm';
import { stylesWithTheme } from "./styles";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useSnackbar } from 'notistack';
import SystemMessage from '@/app/components/systemMessage';

const LoginPage = () => {

  const { t } = useTranslation();
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();

  const styles = stylesWithTheme(theme);
  const router = useRouter();

  const methods = useForm({
    defaultValues: DEFAULT_VALUES_LOGIN,
    mode: 'onChange'
  });

  const { handleSubmit } = methods;

  const [postLogin] = usersAPI.usePostLoginMutation();

  const handleSubmitLogin = useCallback(() => handleSubmit(async (data) => {
    try {
      const res = await postLogin(data as iLogin).unwrap();
      localStorage.setItem(lsConstants.CURRENT_USER, JSON.stringify(res));
      SystemMessage(enqueueSnackbar, getMessage(t, '', 'success'), { variant: 'success', theme });
      router.push(routes.home.path)
    } catch (error: any) {
      SystemMessage(enqueueSnackbar, getMessage(t, error), { variant: 'error', theme });
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
                <Typography color="primary" variant="h5">{t('title')}</Typography>
              </Grid>
              <LoginForm handleSubmit={handleSubmitLogin} />
              <Grid item xs={12}>
                <Typography component={Link} sx={styles.link} href={routes.loginGuest.path}> {t('signInGuest')}</Typography>
              </Grid>
              <Grid item xs={12}>
                {t('createAccount')}
                <Typography component={Link} sx={styles.link} href={routes.registration.path}> {t('register')}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography component={Link} sx={styles.link} href={routes.registrationGuest.path}> {t('registerGuest')}</Typography>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
};

export default LoginPage;