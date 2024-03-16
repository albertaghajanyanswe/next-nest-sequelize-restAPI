import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useSnackbar } from 'notistack';

import { stylesWithTheme } from './styles';
import { useTheme } from '@mui/system';
import StepHOC from '@/app/components/form/FormHOC';
import { iCreateProduct } from '@/configs/shared/types';
import { useTranslation } from 'react-i18next';
import { getCurrentUser } from '@/services/lsService';
import { useParams, useRouter } from 'next/navigation';
import { productsAPI } from '@/services/rtk/ProductsApi';
import { DEFAULT_VALUES_CREATE_PRODUCT } from '@/configs/shared/defaultValues';
import { routes, variables } from '@/configs';
import SystemMessage from '@/app/components/systemMessage';
import { getMessage } from '@/configs/shared/helpers/helper';
import { useModal } from '@/hooks/common/useModal';
import Loading from '@/app/components/loading';
import NotFound from '@/app/components/NotFound';
import PageTitle from '@/app/components/pageTitle';
import { requiredErrMsg } from '@/configs/shared/helpers/formHelper';
import { globalMuiStylesWithTheme } from '@/app/globalMuiStyles';
import SETTINGS from '@/configs/shared/settings';
import CustomButton from '@/app/components/customButton';

const FormHOC = StepHOC<iCreateProduct>()(
  ["name", "description", "otherInfo", "price", "currency", "province", "city", "address", "categoryId", "intendedFor", "productState"]
);

const Form = FormHOC.Form

const ProductItemPage = () => {
  const theme = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const muiStyles = stylesWithTheme(theme);
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const [disableSubmit, setDisableSubmit] = useState(false);

  const currentUser = getCurrentUser()?.user;

  const params = useParams();
  const productId = params.productId;
  const { data: productData, isLoading: isGetLoading } = productsAPI.useGetProductQuery({ id: productId }, { skip: !productId });
  const { data: categoriesData } = productsAPI.useGetAllCategoriesQuery({});

  const initialData = {
    name: productData?.name || '',
    description: productData?.description || '',
    otherInfo: productData?.otherInfo || '',
    price: productData?.price || '',
    currency: productData?.currency || '',
    province: productData?.province || '',
    city: productData?.city || '',
    address: productData?.address || '',
    categoryId: productData?.categoryId || undefined,
    intendedFor: productData?.intendedFor || undefined,
    productState: productData?.productState || undefined
  }

  const methods = useForm<iCreateProduct>({
    defaultValues: ({ ...DEFAULT_VALUES_CREATE_PRODUCT, ...initialData }),
    mode: 'onChange'
  });

  const pageHeaderRef = useRef<any>();
  const handlePageHeaderRef = useCallback((el: HTMLDivElement | null) => {
    pageHeaderRef.current = el
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getPageHeaderHeight = useCallback(() => (pageHeaderRef.current?.clientHeight || 0), [pageHeaderRef.current?.clientHeight, isGetLoading])

  const footerRef = useRef<any>();
  const handleFooterRef = useCallback((el: HTMLDivElement | null) => {
    footerRef.current = el
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getFooterHeight = useCallback(() => (footerRef.current?.clientHeight || 0), [footerRef.current?.clientHeight, isGetLoading])


  const isDirty = methods.formState.isDirty;
  const hasError = Object.keys(methods.formState.errors).length > 0;

  const handleCancel = () => {
    originalValue.current = initialData;
    methods.reset({ ...DEFAULT_VALUES_CREATE_PRODUCT, ...initialData }, {
      keepErrors: false,
      keepDirty: false,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [createProduct, { error: createError }] = productsAPI.useCreateProductMutation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [updateProduct, { error: updateError, isError: updateIsError }] = productsAPI.useUpdateProductMutation();

  const { handleSubmit } = methods;

  const handleSave = useCallback(() => handleSubmit(async (data: any) => {
    try {
      setDisableSubmit(true)
      methods.reset(data, { keepErrors: true, keepDirty: false });
      if (productId) {
        await updateProduct({ ...data, productId: (productId as unknown as number) }).unwrap();
      } else {
        await createProduct({ ...data }).unwrap();
        router.push(routes.products.path);
      }
      SystemMessage(enqueueSnackbar, getMessage(t, '', 'success'), { variant: 'success', theme });
    } catch (error: any) {
      SystemMessage(enqueueSnackbar, getMessage(t, error), { variant: 'error', theme });
    } finally {
      setDisableSubmit(false)
    }
  }), [])

  const originalValue = useRef(currentUser || DEFAULT_VALUES_CREATE_PRODUCT);

  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    if (currentUser && originalValue.current != initialData) {
      originalValue.current = initialData;
      methods.reset({ ...DEFAULT_VALUES_CREATE_PRODUCT, ...initialData }, {
        keepErrors: true,
        keepDirty: true,
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productData, methods.reset]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isOpen, openModal, closeModal } = useModal(false);

  // const { mutateAsync: mutateDeleteAccount, isLoading } = useDeleteAccount();

  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDelete = async () => {
    try {
      // await mutateDeleteAccount({});
      SystemMessage(enqueueSnackbar, getMessage(t, '', 'success'), { variant: 'success' });
      router.push(routes.login.path);
    } catch (error: any) {
      SystemMessage(enqueueSnackbar, getMessage(t, error), { variant: 'error', theme });
    } finally {
      closeModal();
    }
  }

  if (isGetLoading) {
    return <Loading />
  }

  if (productId && !isGetLoading && !productData) {
    return <NotFound />
  }

  return (
    <Box>
      <Box sx={{ position: 'fixed', width: `calc(100% - ${variables.drawerWidth})`, backgroundColor: 'white', zIndex: 1, boxShadow: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px' }}>
        <PageTitle handlePageHeaderRef={handlePageHeaderRef} title={productData?.name ? productData?.name : t('createNewProduct')} withBack />
      </Box>
      <Box sx={{ p: '0 40px 40px 40px', position: 'absolute', mt: `${getPageHeaderHeight()}px` }}>

        <FormProvider {...methods}>
          <form noValidate>
            <Grid container spacing={3} sx={{ mt: 0, mb: `${getFooterHeight()}px` }}>
              <Grid item xs={12} sm={12}>
                <Form.TextField
                  rules={{ required: requiredErrMsg(t, 'name') }}
                  name="name"
                  placeholder={t('productName')}
                  label={t('productName')}
                  sxContainer={{ mt: 0 }}
                  title={t('productName')}
                  borderRadius={8}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Form.SelectField
                  rules={{ required: requiredErrMsg(t, 'productIntendedFor') }}
                  name="intendedFor"
                  placeholder={t('productIntendedFor')}
                  title={t('productIntendedFor')}
                  sx={{ ...globalMuiStylesWithTheme(theme).selectField }}
                  sxContainer={{ mt: 0 }}
                  options={SETTINGS.intendedForList(t)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Form.SelectField
                  rules={{ required: requiredErrMsg(t, 'productState') }}
                  name="productState"
                  placeholder={t('productState')}
                  title={t('productState')}
                  sx={{ ...globalMuiStylesWithTheme(theme).selectField }}
                  sxContainer={{ mt: 0 }}
                  options={SETTINGS.productStateList(t)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Form.TextField
                  rules={{ required: requiredErrMsg(t, 'productDescription') }}
                  name="description"
                  placeholder={t('productDescription')}
                  label={t('productDescription')}
                  sxContainer={{ mt: 0 }}
                  title={t('productDescription')}
                  borderRadius={8}
                  multiline
                  rows={4.5}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Form.TextField
                  rules={{ required: requiredErrMsg(t, 'productPrice') }}
                  name="price"
                  placeholder={t('productPrice')}
                  label={t('productPrice')}
                  sxContainer={{ mt: 0 }}
                  title={t('productPrice')}
                  borderRadius={8}
                  pattern='^\d{0,3}$'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Form.SelectField
                  rules={{ required: requiredErrMsg(t, 'productCurrency') }}
                  name="currency"
                  placeholder={t('productCurrency')}
                  title={t('productCurrency')}
                  sx={{ ...globalMuiStylesWithTheme(theme).selectField }}
                  sxContainer={{ mt: 0 }}
                  options={SETTINGS.currencyList}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Form.TextField
                  rules={{ required: requiredErrMsg(t, 'productProvince') }}
                  name="province"
                  placeholder={t('productProvince')}
                  label={t('productProvince')}
                  sxContainer={{ mt: 0 }}
                  title={t('productProvince')}
                  borderRadius={8}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Form.TextField
                  rules={{ required: requiredErrMsg(t, 'productCity') }}
                  name="city"
                  placeholder={t('productCity')}
                  label={t('productCity')}
                  sxContainer={{ mt: 0 }}
                  title={t('productCity')}
                  borderRadius={8}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Form.TextField
                  rules={{ required: requiredErrMsg(t, 'productAddress') }}
                  name="address"
                  placeholder={t('productAddress')}
                  label={t('productAddress')}
                  sxContainer={{ mt: 0 }}
                  title={t('productAddress')}
                  borderRadius={8}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Form.SelectField
                  rules={{ required: requiredErrMsg(t, 'productCategoryId') }}
                  name="categoryId"
                  placeholder={t('productCategoryId')}
                  title={t('productCategoryId')}
                  sx={{ ...globalMuiStylesWithTheme(theme).selectField }}
                  sxContainer={{ mt: 0 }}
                  options={categoriesData?.data?.map((item: any) => ({ label: item.name || '-', value: item.id }))}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Form.TextField
                  rules={{ required: requiredErrMsg(t, 'productOtherInfo') }}
                  name="otherInfo"
                  placeholder={t('productOtherInfo')}
                  label={t('productOtherInfo')}
                  sxContainer={{ mt: 0 }}
                  title={t('productOtherInfo')}
                  borderRadius={8}
                  multiline={true}
                  rows={3.5}
                />
              </Grid>
            </Grid>
          </form>
        </FormProvider>
      </Box>
      <Box ref={handleFooterRef} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, position: 'fixed', bottom: 0, p: '24px 40px', width: `calc(100% - 0px - ${variables.drawerWidth})`, backgroundColor: 'white', zIndex: 1, boxShadow: 'rgba(33, 35, 38, 0.1) 0px -12px 10px -12px' }}>
        <CustomButton
          label={productId ? t('cancel') : t('clear')}
          btnType='secondary'
          onClick={handleCancel}
          sx={{ width: { xs: '100%', sm: '50%' }, margin: { xs: '0 0 24px 0', sm: '0 24px 0 0' } }}
          disabled={disableSubmit || !isDirty}
        />
        <CustomButton
          label={productId ? t('update') : t('submit')}
          variant='contained'
          btnType='primary'
          onClick={handleSave()}
          sx={{ width: { xs: '100%', sm: '50%' } }}
          disabled={disableSubmit || !isDirty || hasError}
        />
      </Box>
    </Box>
  )
};

export default ProductItemPage;