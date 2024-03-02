'use client'
import React from 'react';
import initTranslations from '@/app/i18n';
import TranslationProvider from '@/app/[locale]/TranslationProvider';
import { ReactQueryClientProvider } from '@/app/providers/ReactQueryClientProvider';
import { setupStore } from '@/store/store';
import { Provider } from 'react-redux';

const i18nNamespaces = ['translation'];

export default async function Layout({ children, params: { locale } }: any) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  const store = setupStore();

  return (
    <Provider store={store}>
      <ReactQueryClientProvider>
        <TranslationProvider locale={locale} resources={resources} namespaces={i18nNamespaces}>
          {children}
        </TranslationProvider>
      </ReactQueryClientProvider>
    </Provider>
  );
}