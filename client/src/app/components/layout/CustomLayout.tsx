'use client';
import React, { FC, useState } from 'react';
import { Box, CssBaseline, useMediaQuery } from '@mui/material';
import { routesAccess } from '@/configs/roles';
import { getCurrentUser } from '@/services/lsService';
import { useRouter, usePathname } from 'next/navigation';
import SideBar from '@/app/components/sidebar/CustomSideBar';
import CustomDrawerHeader from '@/app/components/sidebar/CustomDrawerHeader';
import { variables } from '@/configs';
import { usersAPI } from '@/services/rtk/UsersApi';
import { UserRole } from '@/configs/shared/types';
import Loading from '@/app/components/loading';
import { useTheme } from '@mui/material/styles';
import CustomAppBar from '../sidebar/CustomAppBar';

function CustomLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  // const currentUser = getCurrentUser()?.user || {};

  const { data: currentUser } = usersAPI.useGetCurrentUserQuery({});

  const path = pathname.split('/')[1] as string;
  const allowed =
    !routesAccess[path as keyof typeof routesAccess] ||
    routesAccess[path as keyof typeof routesAccess]?.access?.includes(
      currentUser?.roles[0].value as UserRole
    );

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isPC = useMediaQuery(theme.breakpoints.up('md'));

  const calculatedDrawerWidth = isPC ? variables.drawerWidth : '0px';

  //   useEffect(() => {
  //   console.log('2222222222222 55555555')
  //   const fetchData = async () => {
  //     console.log(1111111);
  //     const result = await fetch('http://localhost:4000/api/users/currentUser');

  //     console.log('result = ', result);
  //   };

  //   fetchData();
  // }, []);
  return currentUser ? (
    <Box
      sx={{
        backgroundColor: 'rgb(250,250,250,1)',
        display: 'flex',
        height: '100%',
        width: '100%',
      }}
    >
      <CssBaseline />
      {isPC && <SideBar />}
      {!isPC && <CustomAppBar />}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { xs: `calc(100% - ${calculatedDrawerWidth})` },
        }}
      >
        {/* todo sidebar */}
        {!isPC && <CustomDrawerHeader />}
        {allowed ? children : <>Not Found</>}
      </Box>
    </Box>
  ) : (
    <Loading withDrawer={false} />
  );
}

export default CustomLayout;
