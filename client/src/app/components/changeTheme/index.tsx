'use client'
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import { useContext } from "react";
import { CustomThemeContext } from "@/configs/themes/CustomThemeProvider";
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
    <Grid container gap={2}>
      <Grid item xs={12} sm={3}>
        <Typography sx={{ textAlign: 'start', fontWeight: 500 }}>{t('changeTheme')}</Typography>
      </Grid>
      <Grid item xs={12} sm={3}>
      <IconButton onClick={() => handleChangeTheme(currentTheme === 'light' ? 'dark' : 'light')} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      </Grid>
    </Grid>
  );
}

export default ChangeTheme;

