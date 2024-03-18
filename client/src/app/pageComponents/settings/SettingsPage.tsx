'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { matchIsValidTel } from 'mui-tel-input';
import { FormProvider, useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { useTheme } from '@mui/material/styles';
import { routes } from '@/configs';
import { useTranslation } from 'react-i18next';
import { iAccountDetails, UserRole } from '@/configs/shared/types';
import { requiredErrMsg } from '@/configs/shared/helpers/formHelper';
import { getMessage } from '@/configs/shared/helpers/helper';
import { useModal } from '@/hooks/common/useModal';
import { usersAPI } from '@/services/rtk/UsersApi';
import SystemMessage from '@/app/components/systemMessage';
import CustomButton from '@/app/components/customButton';
import CustomModal from '@/app/components/modal/CustomModal';
import ChangeTheme from '@/app/components/changeTheme';
import ChangeLanguage from '@/app/components/changeLanguage';
import StepHOC from '@/app/components/form/FormHOC';
import FormFileInput from '@/app/components/form/imageInput';
import { DEFAULT_VALUES_PROFILE } from '@/configs/shared/defaultValues';
import { stylesWithTheme } from './styles';
import { useRouter } from 'next/navigation';
import { uploadsAPI } from '@/services/rtk/UploadsApi';

const FormHOC = StepHOC<iAccountDetails>()(
  ["image", "firstName", "lastName", "email", "phone", "nickName"]
);

const Form = FormHOC.Form

const SettingsPage = () => {
  const theme = useTheme();
  const muiStyles = stylesWithTheme(theme);
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const [disableSubmit, setDisableSubmit] = useState(false);

  const { data: currentUser } = usersAPI.useGetCurrentUserQuery({});

  const currentUserInitialData = {
    image: currentUser ? currentUser?.image : '',
    firstName: currentUser ? currentUser?.firstName : '',
    lastName: currentUser ? currentUser?.lastName : '',
    nickName: currentUser ? currentUser?.nickName : '',
    email: currentUser ? currentUser?.email : '',
    phone: currentUser ? currentUser?.phone : '',
  }

  const methods = useForm<iAccountDetails>({
    defaultValues: ({ ...DEFAULT_VALUES_PROFILE, ...currentUserInitialData }),
    mode: 'onChange'
  });

  const isDirty = methods.formState.isDirty;
  const hasError = Object.keys(methods.formState.errors).length > 0;

  const handleCancel = () => {
    originalValue.current = currentUserInitialData;
    methods.reset({ ...DEFAULT_VALUES_PROFILE, ...currentUserInitialData }, {
      keepErrors: false,
      keepDirty: false,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }

  const [ updateUser ] = usersAPI.useUpdateUserMutation();

  const handleSave = async () => {
    try {
      setDisableSubmit(true)
      const data = { ...methods.getValues() };
      const {nickName, email, ...rest} = data;
      methods.reset({ ...methods.getValues() }, {
        keepErrors: true,
        keepDirty: false,
      })

      await updateUser({ ...rest, userId: currentUser?.id as number });
      SystemMessage(enqueueSnackbar, getMessage(t, '', 'success'), { variant: 'success', theme });
    } catch (error: any) {
      SystemMessage(enqueueSnackbar, getMessage(t, error), { variant: 'error', theme });
    } finally {
      setDisableSubmit(false)
    }
  }

  const validatePhone = (value: string) => !value || matchIsValidTel(value) ? true : t('errors.invalidPhone');

  const originalValue = useRef(currentUser || DEFAULT_VALUES_PROFILE);

  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    if (currentUser && originalValue.current != currentUserInitialData) {
      originalValue.current = currentUserInitialData;
      methods.reset({ ...DEFAULT_VALUES_PROFILE, ...currentUserInitialData }, {
        keepErrors: true,
        keepDirty: true,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, methods.reset]);

  const {isOpen, openModal, closeModal} = useModal(false);

  // const { mutateAsync: mutateDeleteAccount, isLoading } = useDeleteAccount();

  const router = useRouter();

  const handleDelete = async () => {
    try {
      // await mutateDeleteAccount({});
      SystemMessage(enqueueSnackbar, getMessage(t, '', 'success'), { variant: 'success', theme });
      router.push(routes.login.path);
    } catch (error: any) {
      SystemMessage(enqueueSnackbar, getMessage(t, error), { variant: 'error', theme });
    } finally {
      closeModal();
    }
  }
  const [uploadAvatar, { isLoading }] = uploadsAPI.useUploadAvatarMutation();
  const [deleteAvatar] = uploadsAPI.useDeleteAvatarMutation();

  // const [uploadStaticFile, { isLoading: isLoadingStatic }] = uploadsAPI.useUploadStaticFileMutation();

  // const handleUpload = async ({ formData }: any) => {
  //   const bodyData = new FormData();
  //   bodyData.append('file', formData.get('file'));
  //   bodyData.append('userId', '1');
  //   // bodyData.append('productId', '2');

  //   console.log('formData = ', formData);
  //   const res = await uploadStaticFile({ formData: bodyData });
  //   return res;
  // }

  return (
    <Box sx={{ p: '64px'}}>
      <FormProvider {...methods}>
        <form noValidate>
          <Grid container spacing={3} sx={{ mt: 0 }}>
            <Grid item xs={12}>
              <FormFileInput
                name='image'
                label={t('yourPhoto')}
                setDisableSave={setDisableSubmit}
                rootSx={{ borderRadius: '24px' }}
                btnType='secondary'
                labelSx={{ fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}
                description={t('photoDesc')}
                sx={{ mt: 0 }}
                uploadFile={uploadAvatar}
                deleteFile={deleteAvatar}
                uploadFileLoading={isLoading}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Form.TextField
                rules={{ required: requiredErrMsg(t, t('firstName')) }}
                name="firstName"
                placeholder={t('firstName')}
                label={t('firstName')}
                sxContainer={{ mt: 0 }}
                title={t('firstName')}
                borderRadius={8}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Form.TextField
                rules={{ required: requiredErrMsg(t, t('lastName')) }}
                name="lastName"
                placeholder={t('lastName')}
                label={t('lastName')}
                sxContainer={{ mt: 0 }}
                title={t('lastName')}
                borderRadius={8}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Form.TextField
                rules={{ required: requiredErrMsg(t, t('phone')), validate: validatePhone }}
                name="phone"
                placeholder={t('phone')}
                label={t('phone')}
                sxContainer={{ mt: 0 }}
                title={t('phone')}
                borderRadius={8}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Form.TextField
                name="nickName"
                placeholder={t('nickName')}
                label={t('nickName')}
                sxContainer={{ mt: 0 }}
                title={t('nickName')}
                borderRadius={8}
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <Form.TextField
                name="email"
                placeholder={t('email')}
                label={t('email')}
                sxContainer={{ mt: 0 }}
                title={t('email')}
                borderRadius={8}
                disabled
              />
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: {xs: 'column', sm: 'row'},  mt: 5 }}>
            <CustomButton
              label={t('cancel')}
              btnType='secondary'
              onClick={handleCancel}
              sx={{ minWidth: '120px' }}
              disabled={disableSubmit || !isDirty}
            />
            <CustomButton
              label={t('save')}
              variant='contained'
              btnType='primary'
              onClick={handleSave}
              sx={{ minWidth: '120px', mt: {xs: 3, sm: 0} }}
              disabled={disableSubmit || !isDirty || hasError}
            />
          </Box>
        </form>
      </FormProvider>
      {(currentUser && currentUser?.roles[0].value === UserRole.Guest) &&
        <Box sx={muiStyles.deleteAccountBlock}>
          <Box sx={{ mr: 2 }}>
            <Typography sx={{ ...muiStyles.textBold, mb: 1 }}>{t('profile.deleteAccount')}</Typography>
            <Typography sx={{ ...muiStyles.textNormal }}>{t('profile.deleteAccountDesc_1')}</Typography>
            <Box component='span' sx={muiStyles.textNormal}>
              {t('profile.deleteAccountDesc_2_1')}
              <Typography sx={{ color: 'primary.red5' }} component='span'>{t('profile.deleteAccountDesc_2_2')}</Typography>
              {t('profile.deleteAccountDesc_2_3')}
            </Box>
          </Box>
          <Box>
            <CustomButton
              label={t('profile.deleteThisAccount')}
              btnType='secondary'
              onClick={openModal}
              sx={muiStyles.deleteBtn}
              disabled={disableSubmit}
            />
            {isOpen && <CustomModal
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
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 5 }}>
                  <Typography sx={{ ...muiStyles.modalTitleTxt, textAlign: 'center' }}>{t('profile.deleteModal.deleteAccount')}</Typography>
                </Box>
                <Grid container columnSpacing={2}>
                  <Grid item xs={12} sm={6}>
                    <CustomButton
                      label={t('profile.deleteModal.remove')}
                      btnType='primary'
                      sx={muiStyles.removeBtn}
                      onClick={handleDelete}
                      // disabled={isLoading}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CustomButton
                      label={t('profile.deleteModal.cancel')}
                      btnType='secondary'
                      sx={muiStyles.cancelBtn}
                      onClick={closeModal}
                    />
                  </Grid>
                </Grid>
              </Box>

            </CustomModal>}
          </Box>
        </Box>}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', mt: 6  }}>
            <ChangeTheme />
            <Box sx={{ mt: 2 }} />
            <ChangeLanguage />
          </Box>
    </Box>
  )
};

export default SettingsPage;