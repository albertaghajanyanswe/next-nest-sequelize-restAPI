'use client';

import React, { useMemo } from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import {
  Avatar,
  Box,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LogoutIcon from '@mui/icons-material/Logout';
import { useTranslation } from 'react-i18next';
import { links } from '@/app/components/sidebar/config';
import CustomDrawerHeader from '@/app/components/sidebar/CustomDrawerHeader';
import CustomDrawer from '@/app/components/sidebar/CustomDrawer';
import CustomAppBar from '@/app/components/sidebar/CustomAppBar';

import { stylesWithTheme } from './styles';
import { sidebarSlice } from '@/store/reducers/SidebarSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/reactQuery/redux';
import { usersAPI } from '@/services/rtk/UsersApi';
import { UserRole } from '@/configs/shared/types';
import { getCurrentUser, logOut } from '@/services/lsService';
import { usePathname, useRouter } from 'next/navigation';
import { routes } from '@/configs';
import fileService from '@/services/fileService';
import CustomMenuItem from '@/app/components/customMenuItem/CustomMenuItem';
import variables from '@/configs/variables';
import { stringAvatar } from '@/configs/shared/helpers/helper';
import Image from 'next/image';

function CustomSideBar() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const muiStyles = stylesWithTheme(theme);

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isPC = useMediaQuery(theme.breakpoints.up('md'));

  const { isSideBarOpen: sidebarOpen } = useAppSelector(
    (state) => state.sidebarReducer
  );

  React.useEffect(() => {}, [sidebarOpen]);

  const isAppBarOpen = isMobile || isTablet ? false : sidebarOpen;
  const { setActiveLink } = sidebarSlice.actions;
  const dispatch = useAppDispatch();

  const router = useRouter();
  const pathname = usePathname();
  const isLinkActive = (link: string) =>
    pathname === link || pathname.includes(link);

  const handleClick = (link: string) => {
    dispatch(setActiveLink(link));
    console.log('lonk = ', link);
    if (link === '/login') {
      logOut();
    }
    router.push(link, undefined);
  };

  const handleClickLogo = () => {
    console.log('Clicked Logo');
  };

  // const currentUser = getCurrentUser()?.user || {};

  const { data: currentUser, isLoading } = usersAPI.useGetCurrentUserQuery({});

  const drawerList = useMemo(() => {
    return (
      currentUser && (
        <Box component="div" sx={{ mt: 5 }}>
          <List sx={{ p: '0!important' }}>
            {links.map((item) =>
              item.type === 'divider' ? (
                <Box key={item.id} sx={{ p: '12px' }}>
                  <Divider sx={muiStyles.divider} />
                </Box>
              ) : (
                item?.roles?.includes(
                  currentUser?.roles[0].value as UserRole
                ) && (
                  <Tooltip
                    key={item.id}
                    title={t(item.title)}
                    placement="right"
                  >
                    <ListItem
                      sx={{
                        ...muiStyles.listItem,
                        ...(isLinkActive(item.link) &&
                          muiStyles.listItemActive),
                        ...(item?.disabled && { pointerEvents: 'none' }),
                      }}
                      key={item.id}
                      disablePadding
                      onClick={() => handleClick(item.link)}
                      disabled={item?.disabled}
                    >
                      <ListItemButton
                        disableRipple
                        sx={{
                          ...muiStyles.listItemBtn,
                          ...(isLinkActive(item.link) &&
                            muiStyles.listItemBtnActive),
                          justifyContent: isAppBarOpen ? 'initial' : 'center',
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: isAppBarOpen ? 3 : '0',
                            ...muiStyles.linkIcon,
                            ...(isLinkActive(item.link) &&
                              muiStyles.activeLinkIcon),
                            justifyContent: 'center',
                          }}
                        >
                          <item.icon />
                        </ListItemIcon>
                        {isAppBarOpen && (
                          <ListItemText
                            primary={t(item.title)}
                            sx={{
                              ...muiStyles.linkText,
                              ...(isLinkActive(item.link) &&
                                muiStyles.activeLinkTitle),
                              opacity: isAppBarOpen ? 1 : 0,
                            }}
                          />
                        )}
                      </ListItemButton>
                    </ListItem>
                  </Tooltip>
                )
              )
            )}
          </List>
        </Box>
        // eslint-disable-next-line react-hooks/exhaustive-deps
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [links, handleClick, i18n.languages]);

  const handleLogout = () => {
    logOut();
    router.push(routes.login.path, undefined);
  };

  const userName = `${currentUser?.firstName || 'Guest'} ${currentUser?.lastName || 'Guest'}`;

  return (
    <Box sx={{ display: 'flex' }}>
      <CustomDrawer open={isAppBarOpen}>
        <Box>
          <Box
            onClick={handleClickLogo}
            sx={{
              p: isAppBarOpen ? '24px 46px' : '24px 6px',
              alignSelf: 'center',
              cursor: 'pointer',
              textAlign: 'center',
            }}
          >
            {/* <SidebarLogo /> */}
          </Box>
          {!isLoading && (
            <Box
              component="div"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box component="div">
                <Avatar
                  sx={{
                    ...stringAvatar(
                      `${currentUser?.firstName || 'Guest'} ${currentUser?.lastName || 'Guest'}`,
                      isAppBarOpen ? 72 : 36,
                      isAppBarOpen ? 72 : 36
                    ).sx,
                    backgroundColor: 'primary.main',
                  }}
                  // eslint-disable-next-line
                  children={`${userName.split(' ')[0][0]}${userName.split(' ')[1][0]}`}
                  src={fileService.getFileUrl(currentUser?.image)}
                />
              </Box>
              {isAppBarOpen && (
                <Box
                  component="div"
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 2,
                  }}
                >
                  <Typography sx={muiStyles.welcomeUser}>
                    {t('welcome')}
                  </Typography>
                  <Typography sx={muiStyles.userName}>
                    {currentUser?.firstName} {currentUser?.lastName}
                  </Typography>
                </Box>
              )}
            </Box>
          )}
          {drawerList}
        </Box>
      </CustomDrawer>
    </Box>
  );
}

export default CustomSideBar;
