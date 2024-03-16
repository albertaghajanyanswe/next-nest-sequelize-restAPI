'use client'
import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { usePathname, useRouter } from 'next/navigation';
import i18nConfig from '@/app/i18nConfig';

function ChangeLanguage() {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const isEN = currentLocale === 'en';
  const isRU = currentLocale === 'ru';

  const handleChange = React.useCallback(
    (newLocale: string) => () => {
      const days = 30;
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = '; expires=' + date.toUTCString();
      document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

      if (currentLocale === i18nConfig.defaultLocale) {
        router.push('/' + newLocale + currentPathname);
      } else {
        router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
      }

      router.refresh();
    },
    [currentLocale, currentPathname, router],
  );

  return (
    <Grid container gap={2} sx={{ alignItems: 'center' }}>
      <Grid item xs={12} sm={3}>
        <Typography sx={{ mr: 2, textAlign: 'start', fontWeight: 500 }}>{t('changeLang')}</Typography>
      </Grid>
      <Grid item xs={12} sm={3}>
        <ButtonGroup
          disableElevation
          variant="outlined"
        >
          <Button sx={{ fontWeight: 400, backgroundColor: isEN ? 'primary.main' : 'white', color: isEN ? 'white' : 'inherit', '&:hover': { color: 'white', backgroundColor: 'primary.btnMainHover' } }} onClick={handleChange('en')}>{t('en')}</Button>
          <Button sx={{ fontWeight: 400, backgroundColor: isRU ? 'primary.main' : 'white', color: isRU ? 'white' : 'inherit', '&:hover': { color: 'white', backgroundColor: 'primary.btnMainHover' } }} onClick={handleChange('ru')}>{t('ru')}</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
}

export default ChangeLanguage;