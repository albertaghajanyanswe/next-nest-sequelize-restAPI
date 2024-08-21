'use client';

import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { createInstance } from 'i18next';
import initTranslations from '@/app/i18n';

interface TranslationProviderProps {
  locale: string;
  namespaces: string[];
  resources: any;
  children: React.ReactNode;
}

const TranslationProvider = ({
  children,
  locale,
  namespaces,
  resources,
}: TranslationProviderProps) => {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

TranslationProvider.displayName = 'TranslationProvider';
export default TranslationProvider;
