'use client'

import React from 'react';
import { Box, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
// import { matchIsValidTel } from 'mui-tel-input';
import { useFormContext } from 'react-hook-form';
import { isEmail, requiredErrMsg } from '@/configs/shared/helpers/formHelper';
import { iRegistration } from '@/configs/shared/types';
import CustomButton from '@/app/components/customButton';
import StepHOC from '@/app/components/form/FormHOC';
import { usePathname } from 'next/navigation';


interface iProps {
  handleSubmit: () => (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>
}

const FormHOC = StepHOC<iRegistration>()(
  ["firstName", "lastName", "email", "password", "nickName", "phone", "switchGuestAccount"]
);

const Form = FormHOC.Form

const RegistrationForm = FormHOC<iProps>(({ handleSubmit }) => {
  const { t } = useTranslation();
  const validateEmail = (value: string) => isEmail(value) ? true : t('errors.incorrectEmail');
  // const validatePhone = (value: string) => matchIsValidTel(value) ? true : t('errors.invalidPhone');
  const pathname = usePathname();
  const asGuest = pathname.includes('/guest');
  const { watch } = useFormContext();
  const switchGuestAccountValue = watch('switchGuestAccount');

  return (
    <>
      {!asGuest && <Grid item xs={12} sm={12}>
        <Form.SwitchField
          rules={{}}
          name="switchGuestAccount"
          label={t('switchGuestAccount')}
        />
      </Grid>}
      {!asGuest && <Grid item xs={12} sm={6}>
        <Form.TextField
          rules={{ required: requiredErrMsg(t, t('firstName')) }}
          name="firstName"
          placeholder={t('firstName')}
          label={t('firstName')}
          sxContainer={{ mt: 0 }}
          title={t('firstName')}
          helperTooltip={t('firstName')}
          borderRadius={8}
        />
      </Grid>}
      {!asGuest && <Grid item xs={12} sm={6}>
        <Form.TextField
          rules={{ required: requiredErrMsg(t, t('lastName')) }}
          name="lastName"
          placeholder={t('lastName')}
          label={t('lastName')}
          sxContainer={{ mt: 0 }}
          title={t('lastName')}
          helperTooltip={t('lastName')}
          borderRadius={8}
        />
      </Grid>}
      {!asGuest && <Grid item xs={12} sm={6}>
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
      </Grid>}
      {asGuest && <Grid item xs={12} sm={12}>
        <Form.TextField
          rules={{ required: requiredErrMsg(t, t('nickName')) }}
          name="nickName"
          placeholder={t(`nickName`)}
          label={switchGuestAccountValue ? t(`guestNickName`) : t(`nickName`)}
          sxContainer={{ mt: 0 }}
          title={switchGuestAccountValue ? t(`guestNickName`) : t(`nickName`)}
          helperTooltip={switchGuestAccountValue ? t(`guestNickName`) : t(`nickName`)}
          borderRadius={8}
        />
      </Grid>}
      <Grid item xs={12} sm={asGuest ? 12 : 6}>
        <Form.TextField
          rules={{ required: requiredErrMsg(t, t('password')) }}
          name="password"
          placeholder={t(`password`)}
          label={switchGuestAccountValue ? t(`guestPassword`) : t(`password`)}
          sxContainer={{ mt: 0 }}
          title={switchGuestAccountValue ? t(`guestPassword`) : t(`password`)}
          helperTooltip={switchGuestAccountValue ? t(`guestPassword`) : t(`password`)}
          borderRadius={8}
          withEyeIcon
          eyeIconSize={16}
          type='password'
        />
      </Grid>
      {!asGuest && <Grid item xs={12} sm={12}>
        <Form.TextField
          rules={{ required: requiredErrMsg(t, t('nickName')) }}
          name="nickName"
          placeholder={t(`nickName`)}
          label={switchGuestAccountValue ? t(`guestNickName`) : t(`nickName`)}
          sxContainer={{ mt: 0 }}
          title={switchGuestAccountValue ? t(`guestNickName`) : t(`nickName`)}
          helperTooltip={switchGuestAccountValue ? t(`guestNickName`) : t(`nickName`)}
          borderRadius={8}
        />
      </Grid>}
      {!asGuest && <Grid item xs={12} sm={12}>
        <Form.PhoneField
          // rules={{ required: requiredErrMsg(t('register.phone')), validate: validatePhone }}
          rules={{}}
          name="phone"
          placeholder={t('phone')}
          title={t('phone')}
          sxContainer={{ mt: 0 }}
        />
      </Grid>}
      <Grid item xs={12} sm={12}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mt: 1 }}>
          <CustomButton
            label={t('submit')}
            btnType='primary'
            sx={{ width: '100%', p: '8px 12px', fontSize: '16px', lineHeight: '24px', fontWeight: 600 }}
            onClick={handleSubmit()}
          />
        </Box>
      </Grid>
    </>
  );
});

export default RegistrationForm;
