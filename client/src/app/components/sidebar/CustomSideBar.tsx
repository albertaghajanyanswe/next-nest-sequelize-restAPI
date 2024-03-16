'use client'

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
  useMediaQuery
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


export const ArrowLeftBtn = ({ color, ...props }: { color?: any, props?: any }) => {
  const theme = useTheme();
  return (
    <svg {...props} width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="1" width="32" height="32" rx="16" fill="white" />
      <path d="M21.6663 16.9997H12.333M12.333 16.9997L16.9997 21.6663M12.333 16.9997L16.9997 12.333" stroke={color || (theme as Theme)?.palette?.primary?.main} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="1" y="1" width="32" height="32" rx="16" stroke={color || (theme as Theme)?.palette?.primary?.borderColor1} strokeWidth="1.25" />
    </svg>
  )
};

function CustomSideBar() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const muiStyles = stylesWithTheme(theme);

  const [open, setOpen] = React.useState(true);

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isPC = useMediaQuery(theme.breakpoints.up('md'));

  const isAppBarOpen = (isMobile || isTablet ? false : open);

  const { setActiveLink } = sidebarSlice.actions;
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { activeLink } = useAppSelector(state => state.sidebarReducer);

  const router = useRouter();
  const pathname = usePathname();
  const isLinkActive = (link: string) => pathname === link;

  const openSideBar = () => {
    setOpen(true);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  const handleClick = (link: string) => {
    dispatch(setActiveLink(link))
    router.push(link, undefined);
  }

  const handleClickLogo = () => {
    console.log("Clicked Logo");
  }

  // const currentUser = getCurrentUser()?.user || {};

  const { data: currentUser, isLoading } = usersAPI.useGetCurrentUserQuery({});

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const menuOpened = Boolean(anchorEl);

  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawerList = useMemo(() => {
    return currentUser && (
      <Box component="div" sx={{ backgroundColor: 'primary.main', mt: 5 }}>
        <List sx={{ background: 'inherit', p: 0 }}>
          {links.map((item) => item.type === 'divider' ? (
            <Box key={item.id} sx={{ p: '8px 12px' }}><Divider sx={muiStyles.divider} /></Box>
          ) : (
            (item?.roles?.includes(currentUser?.roles[0].value as UserRole)) &&
            <Tooltip key={item.id} title={t(item.title)} placement="right">
              <ListItem sx={{ ...muiStyles.listItem, ...(isLinkActive(item.link) && muiStyles.listItemActive), ...(item?.disabled && { pointerEvents: 'none' }) }} key={item.id} disablePadding onClick={() => handleClick(item.link)} disabled={item?.disabled}>
                <ListItemButton
                  disableRipple
                  sx={{
                    ...muiStyles.listItemBtn,
                    ...(isLinkActive(item.link) && muiStyles.listItemBtnActive),
                    justifyContent: isAppBarOpen ? 'initial' : 'center',
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: isAppBarOpen ? 3 : '0',
                      ...(isLinkActive(item.link) && item.id !== 'departments' && muiStyles.activeLinkIcon),
                      justifyContent: 'center',
                    }}
                  >
                    <item.icon />
                  </ListItemIcon>
                  {isAppBarOpen && <ListItemText
                    primary={t(item.title)}
                    sx={{
                      ...muiStyles.linkText,
                      ...(isLinkActive(item.link) && muiStyles.activeLinkTitle),
                      opacity: isAppBarOpen ? 1 : 0
                    }}
                  />}
                </ListItemButton>
              </ListItem>
            </Tooltip>
          )
          )}
        </List>
      </Box>
      // eslint-disable-next-line react-hooks/exhaustive-deps
    )
  }, [links, handleClick, i18n.languages]);

  const handleLogout = () => {
    logOut();
    router.push(routes.login.path, undefined);
  }

  const isGuest = currentUser?.roles[0]?.value === 'GUEST';

  const appBarContent = useMemo(() => {
    return (
      <Toolbar sx={{ backgroundColor: 'white', color: theme.palette.primary.main }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={openSideBar}
          edge="start"
          sx={{
            marginRight: 5,
            ...(isAppBarOpen && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap component="div" />
          <Box sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              {isGuest ? (
                <Box sx={{ mr: 1 }}>
                  <Typography sx={{ fontSize: '16px', fontWeight: 500 }} noWrap>GUEST</Typography>
                  <Typography sx={{ fontSize: '12px' }} noWrap>{currentUser?.nickName}</Typography>
                </Box>
              ) : (
                <Box sx={{ mr: 1 }}>
                  <Typography sx={{ fontSize: '16px', fontWeight: 500 }} noWrap>{currentUser?.firstName} {currentUser?.lastName}</Typography>
                  <Typography sx={{ fontSize: '12px' }} noWrap>{currentUser?.email}</Typography>
                </Box>
              )}
            </Box>
            <Tooltip title={currentUser?.email} >
              <IconButton name='menu' onClick={handleClickMenu}>
                <Avatar src={fileService.getFileUrl(currentUser?.image)}>{currentUser?.firstName.charAt(0) || 'G'}{currentUser?.lastName.charAt(0) || 'G'}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              elevation={0}
              anchorEl={anchorEl}
              keepMounted
              open={menuOpened}
              onClose={handleClose}
              PaperProps={{ sx: { ...muiStyles.paper, maxHeight: variables.menuItemHeightValue * 4 } }}
            >
              <CustomMenuItem text={t('logout')} onClick={handleLogout}>
                <LogoutIcon style={{ fontSize: '14px', color: theme.palette.primary.textColor1 }} />
              </CustomMenuItem>
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anchorEl, handleLogout, menuOpened, open]);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <CustomAppBar position="fixed" open={isAppBarOpen}>
        {appBarContent}
      </CustomAppBar>
      <CustomDrawer open={isAppBarOpen}>
        <CustomDrawerHeader>
          <IconButton onClick={closeSideBar}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ArrowLeftBtn />}
          </IconButton>
        </CustomDrawerHeader>
        <Divider />

        <Box>
          <Box onClick={handleClickLogo} sx={{ p: isAppBarOpen ? '24px 46px' : '24px 6px', alignSelf: 'center', cursor: 'pointer', textAlign: 'center' }} >
            {/* <SidebarLogo /> */}
          </Box>
          {!isLoading && <Box component="div" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box component="div">
              <Avatar {...stringAvatar(`${currentUser?.firstName || 'Guest'} ${currentUser?.lastName || 'Guest'}`, isAppBarOpen ? 72 : 36, isAppBarOpen ? 72 : 36)} src={fileService.getFileUrl(currentUser?.image)} />
            </Box>
            {isAppBarOpen && <Box component="div" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
              <Typography sx={muiStyles.welcomeUser}>{t('welcome')}</Typography>
              <Typography sx={muiStyles.userName}>{currentUser?.firstName} {currentUser?.lastName}</Typography>
            </Box>}
          </Box>}
          {drawerList}
        </Box>
      </CustomDrawer>
    </Box>
  );
}

export default CustomSideBar;
