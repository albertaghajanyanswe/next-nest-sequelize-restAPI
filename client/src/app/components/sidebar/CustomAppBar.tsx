'use client';

import React, { memo, useMemo } from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';
import variables from '@/configs/variables';
import {
  Avatar,
  Box,
  ClickAwayListener,
  IconButton,
  Menu,
  MenuList,
  Paper,
  Popper,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { usersAPI } from '@/services/rtk/UsersApi';
import fileService from '@/services/fileService';
import CustomMenuItem from '../customMenuItem/CustomMenuItem';
import { stylesWithTheme } from './styles';
import { logOut } from '@/services/lsService';
import { useRouter, usePathname } from 'next/navigation';
import { routes } from '@/configs';
import { useTranslation } from 'react-i18next';
import LogoutIcon from '@mui/icons-material/Logout';
import Fade from '@mui/material/Fade';
import MenuIcon from '@mui/icons-material/Menu';
import ListIcon from '@mui/icons-material/List';
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  children?: React.ReactNode;
}

const CustomAppBar = ({ open, children }: AppBarProps) => {
  const theme = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const { t, i18n } = useTranslation();

  const { data: currentUser, isLoading } = usersAPI.useGetCurrentUserQuery({});
  const isGuest = currentUser?.roles[0]?.value === 'GUEST';
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorElLeft, setAnchorElLeft] = React.useState<null | HTMLElement>(
    null
  );
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenLeft, setIsOpenLeft] = React.useState(false);

  const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    // setAnchorElLeft(null);
    setAnchorEl(event.currentTarget);
    setIsOpen((prev) => !prev);
  };
  const handleClickMenuLeft = (event: React.MouseEvent<HTMLButtonElement>) => {
    // setAnchorEl(null);
    setAnchorElLeft(event.currentTarget);
    setIsOpenLeft((prev) => !prev);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };
  const handleCloseLeft = () => {
    setAnchorElLeft(null);
    setIsOpenLeft(false);
  };
  const handleLogout = () => {
    logOut();
    router.push(routes.login.path, undefined);
  };

  const muiStyles = stylesWithTheme(theme);

  const appBarContent = useMemo(() => {
    return (
      <Toolbar
        sx={{
          backgroundColor: 'rgb(250,250,250,1)',
          color: theme.palette.primary.main,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <IconButton
              name="menu-left"
              onClick={handleClickMenuLeft}
              id="fade-button-left"
              aria-controls={isOpenLeft ? 'fade-menu-left' : undefined}
              aria-haspopup="true"
              aria-expanded={isOpenLeft ? 'true' : undefined}
            >
              <MenuIcon />
            </IconButton>

            <Popper
              id={isOpenLeft ? 'simple-popper-left' : undefined}
              open={isOpenLeft}
              anchorEl={anchorElLeft}
            >
              <ClickAwayListener onClickAway={handleCloseLeft}>
                <Paper>
                  <MenuList sx={{ backgroundColor: 'white', mt: '12px', ml: '12px' }} className="AAAAAAAA">
                    <CustomMenuItem text={t('logout')} onClick={handleLogout}>
                      <LogoutIcon
                        style={{
                          fontSize: '14px',
                          color: theme.palette.primary.textColor1,
                        }}
                      />
                    </CustomMenuItem>
                  </MenuList>
                </Paper>
              </ClickAwayListener>
            </Popper>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              {isGuest ? (
                <Box sx={{ mr: 1 }}>
                  <Typography sx={{ fontSize: '16px', fontWeight: 500 }} noWrap>
                    GUEST
                  </Typography>
                  <Typography sx={{ fontSize: '12px' }} noWrap>
                    {currentUser?.nickName}
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ mr: 1 }}>
                  <Typography sx={{ fontSize: '16px', fontWeight: 500 }} noWrap>
                    {currentUser?.firstName} {currentUser?.lastName}
                  </Typography>
                  <Typography sx={{ fontSize: '12px' }} noWrap>
                    {currentUser?.email}
                  </Typography>
                </Box>
              )}
            </Box>
            {/* <Tooltip title={currentUser?.email}> */}
            <IconButton
              name="menu"
              onClick={handleClickMenu}
              id="fade-button"
              aria-controls={isOpen ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={isOpen ? 'true' : undefined}
            >
              <Avatar
                src={fileService.getFileUrl(currentUser?.image)}
                sx={{ backgroundColor: 'primary.main' }}
              >
                {currentUser?.firstName.charAt(0) || 'G'}
                {currentUser?.lastName.charAt(0) || 'G'}
              </Avatar>
            </IconButton>
            {/* </Tooltip> */}

            <Popper
              id={isOpen ? 'simple-popper' : undefined}
              open={isOpen}
              anchorEl={anchorEl}
            >
              <ClickAwayListener onClickAway={handleClose}>
                <Paper>
                  <MenuList sx={{ backgroundColor: 'white', mt: '4px', mr: '12px' }}>
                    <CustomMenuItem text={t('logout')} onClick={handleLogout}>
                      <LogoutIcon
                        style={{
                          fontSize: '14px',
                          color: theme.palette.primary.textColor1,
                        }}
                      />
                    </CustomMenuItem>
                  </MenuList>
                </Paper>
              </ClickAwayListener>
            </Popper>
          </Box>
        </Box>
      </Toolbar>
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [anchorEl, handleLogout, isOpen, isOpenLeft]);

  return (
    <MuiAppBar
      position="fixed"
      sx={{
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
          marginLeft: variables.drawerWidthValue,
          width: `calc(100% - ${variables.drawerWidth})`,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }}
    >
      {appBarContent}
    </MuiAppBar>
  );
};

export default memo(CustomAppBar);
