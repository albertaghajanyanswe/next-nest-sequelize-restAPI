'use client'
import React, { FC, useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import { routesAccess } from '@/configs/roles';
import { getCurrentUser } from '@/services/lsService';
import { useRouter, usePathname } from 'next/navigation';
import SideBar from '@/app/components/sidebar/CustomSideBar';
import CustomDrawerHeader from '@/app/components/sidebar/CustomDrawerHeader';
import { variables } from '@/configs';
import { usersAPI } from '@/services/rtk/UsersApi';
import { UserRole } from '@/configs/shared/types';
import Loading from '@/app/components/loading';

function CustomLayout({
  children
}:{ children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  // const currentUser = getCurrentUser()?.user || {};

  const {data: currentUser} = usersAPI.useGetCurrentUserQuery({});

  const path = pathname.split('/')[1] as string;
  const allowed = !routesAccess[path as keyof typeof routesAccess] ||
    routesAccess[path as keyof typeof routesAccess]?.access?.includes(currentUser?.roles[0].value as UserRole);

  return currentUser ? (
    <Box sx={{ display: 'flex', height: '100%', width: '100%' }}>
      <CssBaseline />
      <SideBar />
      <Box
        component="main"
        sx={{ flexGrow: 1, width: { xs: `calc(100% - ${variables.drawerWidth})` } }}
      >
        <CustomDrawerHeader />
        {allowed ? children : <>Not Found</>}
      </Box>
    </Box>
  ) : (<Loading />);
};

export default CustomLayout;