'use client'

import React, { useEffect } from "react";
import { useTheme } from "@mui/system";
import { stylesWithTheme } from "./styles";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { sidebarSlice } from "@/store/reducers/SidebarSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reactQuery/redux";



function SideBarFooter() {
  const { t } = useTranslation();
  const theme = useTheme();
  const muiStyles = stylesWithTheme(theme);
  const downSM = useMediaQuery('(max-width:980px)');
  const { openSidebar, closeSidebar, toggleSidebar } = sidebarSlice.actions;
  const dispatch = useAppDispatch();
  const { isSideBarOpen } = useAppSelector(state => state.sidebarReducer);

  const handleSideBarToggle = () => {
    dispatch(toggleSidebar(isSideBarOpen));
  }

  useEffect(() => {
    dispatch(toggleSidebar(!downSM));
  }, [downSM])

  return (
    <footer>
      <Box sx={{...muiStyles.footer, ...(isSideBarOpen ? muiStyles.footerOpenedMode : muiStyles.footerClosedMode)}}>
      {isSideBarOpen && <Box sx={muiStyles.footerTexts}>
          <Box sx={muiStyles.versionText}>
            <Typography sx={{ ...muiStyles.footerTypographies }}>
              {`${t('version')} 2.13.0`}
            </Typography>
          </Box>
          <div>
            <Typography sx={{ ...muiStyles.footerTypographies }}>
              {t('copyright')}
            </Typography>
          </div>
        </Box>}
        <Box sx={{ ...muiStyles.footerCollapseAction, ...(isSideBarOpen ? muiStyles.footerActionOpenedMode :  {}) }}>
          {isSideBarOpen ?
            <ArrowBackIosOutlinedIcon sx={muiStyles.footerActionBtn} onClick={handleSideBarToggle}/> :
            <ArrowForwardIosOutlinedIcon sx={muiStyles.footerActionBtn} onClick={handleSideBarToggle}/>}
        </Box>
      </Box>

    </footer>
  );
}

export default SideBarFooter;