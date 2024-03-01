'use client'
import { Box, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import { useContext } from "react";
import { CustomThemeContext } from "../../../configs/themes/CustomThemeProvider";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTranslation } from "react-i18next";

function ChangeTheme() {
  const { t } = useTranslation();
  const theme = useTheme();

  const { currentTheme, setTheme } = useContext(CustomThemeContext);

  const handleChangeTheme = (themeVal: 'light' | 'dark') => {
    setTheme(themeVal);
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // color: 'text.primary',
        borderRadius: 1,
      }}
    >
      <Typography sx={{ color: theme.palette.primary.main, minWidth: '224px', mr: 2, textAlign: 'start', fontWeight: 500 }}>{t('changeTheme')}</Typography>
      <IconButton onClick={() => handleChangeTheme(currentTheme === 'light' ? 'dark' : 'light')} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
}

export default ChangeTheme;

