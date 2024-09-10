'use client';

import React, { useCallback } from 'react';
import { useTheme } from '@mui/system';
import { FormProvider, useForm } from 'react-hook-form';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { stylesWithTheme } from './styles';
import { DEFAULT_VALUES_LOGIN_GUEST } from '@/configs/shared/defaultValues';
import { routes } from '@/configs';
import { iLoginGuest } from '@/configs/shared/types';
import { lsConstants } from '@/configs/shared/constants';
import { getMessage } from '@/configs/shared/helpers/helper';
import { usersAPI } from '@/services/rtk/UsersApi';
import LoginForm from '@/app/pageComponents/login/components/LoginForm';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import SystemMessage from '../../components/systemMessage';
import { useSnackbar } from 'notistack';
import CustomButton from '@/app/components/customButton';

const LoginGuestPage = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();

  const styles = stylesWithTheme(theme);
  const router = useRouter();

  const methods = useForm({
    defaultValues: DEFAULT_VALUES_LOGIN_GUEST,
    mode: 'onChange',
  });

  const { handleSubmit } = methods;

  const [postLoginGuest] = usersAPI.usePostLoginGuestMutation();

  const handleSubmitLogin = useCallback(
    () =>
      handleSubmit(async (data) => {
        try {
          const res = await postLoginGuest(data as iLoginGuest).unwrap();
          localStorage.setItem(lsConstants.CURRENT_USER, JSON.stringify(res));
          SystemMessage(enqueueSnackbar, getMessage(t, '', 'success'), {
            variant: 'success',
            theme,
          });
          router.push(routes.home.path);
        } catch (error: any) {
          SystemMessage(enqueueSnackbar, getMessage(t, error), {
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
                  {t('enterCredGuest')}
                </Typography>
              </Grid>
              <LoginForm handleSubmit={handleSubmitLogin} />
              <Grid item xs={12}>
                <Divider>{t('or')}</Divider>
              </Grid>
              <Grid item xs={12}>
                <CustomButton
                  href={routes.login.path}
                  label={t('login')}
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
                  sx={styles.link}
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

export default LoginGuestPage;
