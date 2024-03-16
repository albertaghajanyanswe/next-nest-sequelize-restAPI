import React from 'react';
import CustomLayout from '@/app/components/layout/CustomLayout';

export default async function Layout({ children, params: { locale } }: any) {

  return (
    <CustomLayout>
      {children}
    </CustomLayout>
  );
}