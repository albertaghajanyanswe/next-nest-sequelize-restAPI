import React from 'react';
import initTranslations from '@/app/i18n';
import { CustomSnackbarProvider } from '@/app/providers/CustomSnackbarProvider';
import { ReactQueryClientProvider } from '@/app/providers/ReactQueryClientProvider';
import TranslationProvider from '@/app/providers/TranslationProvider';

import i18nConfig from '../i18nConfig';

const i18nNamespaces = ['translation'];

export async function generateStaticParams() {
  const locales = i18nConfig.locales; // Replace with your supported locales

  return locales.map((locale) => ({
    locale, // this will match the [locale] dynamic segment
  }));
}

export default async function Layout({ children, params: { locale } }: any) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <CustomSnackbarProvider>
      <ReactQueryClientProvider>
        <TranslationProvider
          locale={locale}
          resources={resources}
          namespaces={i18nNamespaces}
        >
          {children}
        </TranslationProvider>
      </ReactQueryClientProvider>
    </CustomSnackbarProvider>
  );
}
