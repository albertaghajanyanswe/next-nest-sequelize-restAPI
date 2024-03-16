'use client'

import React from 'react';
import { Box, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import CustomButton from '@/app/components/customButton';
import { iLogin } from '@/configs/shared/types';
import { isEmail, requiredErrMsg } from '@/configs/shared/helpers/formHelper';
import StepHOC from '@/app/components/form/FormHOC';
import { usePathname } from 'next/navigation';


interface iProps {
  handleSubmit: () => (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>
}

const FormHOC = StepHOC<iLogin & { nickName: string }>()(
  ["email", "password", "nickName"]
);

const Form = FormHOC.Form

const LoginForm = FormHOC<iProps>(({ handleSubmit }) => {
  const { t } = useTranslation();
  const validateEmail = (value: string) => isEmail(value) ? true : t('errors.incorrectEmail');
  const pathname = usePathname();
  const asGuest = pathname.includes('/guest');

  return (
    <>
      <Grid item xs={12} sm={12}>
        {asGuest ?
          <Form.TextField
            rules={{ required: requiredErrMsg(t, t('nickName')) }}
            name="nickName"
            placeholder={t('nickName')}
            label={t('nickName')}
            sxContainer={{ mt: 0 }}
            title={t('nickName')}
            helperTooltip={t('nickName')}
            borderRadius={8}
          /> :
          <Form.TextField
            rules={{ required: requiredErrMsg(t, t('email')), validate: validateEmail }}
            name="email"
            placeholder={t('email')}
            label={t('email')}
            sxContainer={{ mt: 0 }}
            title={t('email')}
            helperTooltip={t('email')}
            borderRadius={8}
          />
        }
      </Grid>
      <Grid item xs={12} sm={12}>
        <Form.TextField
          rules={{ required: requiredErrMsg(t, t('password')) }}
          name="password"
          placeholder={t('password')}
          label={t('password')}
          sxContainer={{ mt: 0 }}
          title={t('password')}
          helperTooltip={t('password')}
          borderRadius={8}
          withEyeIcon
          eyeIconSize={16}
          type='password'
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 1 }}>
          <CustomButton
            label={t('submit')}
            sx={{ width: '100%', p: '8px 12px', fontSize: '16px', lineHeight: '24px', fontWeight: 600 }}
            onClick={handleSubmit()}
            variant='outlined'
            name='login-submit'
          />
        </Box>
      </Grid>
    </>
  );
});

export default LoginForm;
