'use client';

import React, { useCallback } from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/system';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { DEFAULT_VALUES_LOGIN } from '@/configs/shared/defaultValues';
import { usersAPI } from '@/services/rtk/UsersApi';
import { getMessage } from '@/configs/shared/helpers/helper';
import { lsConstants } from '@/configs/shared/constants';
import { routes } from '@/configs';
import { iLogin } from '@/configs/shared/types';
import LoginForm from './components/LoginForm';
import { stylesWithTheme } from './styles';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useSnackbar } from 'notistack';
import SystemMessage from '@/app/components/systemMessage';
import CustomButton from '@/app/components/customButton';

const LoginPage = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();

  const styles = stylesWithTheme(theme);
  const router = useRouter();

  const methods = useForm({
    defaultValues: DEFAULT_VALUES_LOGIN,
    mode: 'onChange',
  });

  const { handleSubmit } = methods;

  const [postLogin] = usersAPI.usePostLoginMutation();

  const handleSubmitLogin = useCallback(
    () =>
      handleSubmit(async (data) => {
        try {
          console.log('AAAAAAAAAAAAAAAA');
          const res = await postLogin(data as iLogin).unwrap();
          localStorage.setItem(lsConstants.CURRENT_USER, JSON.stringify(res));
          SystemMessage(enqueueSnackbar, getMessage(t, '', 'success'), {
            variant: 'success',
            theme,
          });
          router.push(routes.home.path);
        } catch (error: any) {
          console.log('err = ', error);
          // SystemMessage(enqueueSnackbar, getMessage(t, error), { variant: 'error', theme });
          SystemMessage(enqueueSnackbar, JSON.stringify(error), {
            variant: 'error',
            theme,
          });
        }
        return true;
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Box sx={styles.layout}>
      <Box sx={styles.container} p={4}>
        <FormProvider {...methods}>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  color="primary.textColor1"
                  sx={{ fontWeight: '600' }}
                >
                  {t('loginWelcome')}
                </Typography>
                <Typography
                  variant="h5"
                  color="primary.textColor1"
                  sx={{ fontSize: 14, mt: 2 }}
                >
                  {t('enterCred')}
                </Typography>
              </Grid>
              <LoginForm handleSubmit={handleSubmitLogin} />
              <Grid item xs={12}>
                <Divider>{t('or')}</Divider>
              </Grid>
              <Grid item xs={12}>
                <CustomButton
                  href={routes.loginGuest.path}
                  label={t('loginGuest')}
                  sx={{
                    width: '100%',
                    p: '8px 12px',
                    fontSize: '16px',
                    lineHeight: '24px',
                    fontWeight: 600,
                  }}
                  variant="outlined"
                  name="login-submit"
                  btnType="secondary"
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 12 }}>
                {t('notAccountYet')}
                <Typography
                  component={Link}
                  sx={{ ...styles.link, ml: 1 }}
                  href={routes.registration.path}
                >
                  {' '}
                  {t('createAccount')}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  component={Link}
                  sx={styles.link}
                  href={routes.registrationGuest.path}
                >
                  {' '}
                  {t('registerGuest')}
                </Typography>
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </Box>
    </Box>
  );
};

export default LoginPage;
