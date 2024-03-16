import React from 'react';
import initTranslations from '@/app/i18n';
import TranslationProvider from '@/app/providers/TranslationProvider';
import { ReactQueryClientProvider } from '@/app/providers/ReactQueryClientProvider';
import CustomLayout from '@/app/components/layout/CustomLayout';
import { ReduxProvider } from '@/app/providers/ReduxProvider';
import { getCurrentUser } from '@/services/lsService';
import { lsConstants } from '@/configs/shared/constants';
import { CurrentUserProvider } from '@/app/providers/CurrentUserProvider';
import { Box } from '@mui/material';
import { CustomSnackbarProvider } from '@/app/providers/CustomSnackbarProvider';
import { Poppins } from 'next/font/google';
// import { SnackbarProvider } from 'notistack';

const i18nNamespaces = ['translation'];

export default async function Layout({ children, params: { locale } }: any) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <CustomSnackbarProvider>
      <ReduxProvider>
        <ReactQueryClientProvider>
          <TranslationProvider locale={locale} resources={resources} namespaces={i18nNamespaces}>
            {children}
          </TranslationProvider>
        </ReactQueryClientProvider>
      </ReduxProvider>
    </CustomSnackbarProvider>
  );
}