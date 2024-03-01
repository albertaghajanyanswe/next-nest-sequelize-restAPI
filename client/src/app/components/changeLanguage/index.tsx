'use client'
import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import { usePathname, useRouter } from 'next/navigation';
import i18nConfig from '@/app/i18nConfig';

function ChangeLanguage() {
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const isEN = currentLocale === 'en';
  const isRU = currentLocale === 'ru';

  console.log('currentLocale = ', currentLocale)
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
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // color: 'text.primary',
        borderRadius: 1,
      }}
    >
      <Typography sx={{ minWidth: '224px', mr: 2, textAlign: 'start', fontWeight: 500 }}>{t('changeLang')}</Typography>

      <ButtonGroup
        disableElevation
        variant="outlined"
      >
        <Button sx={{ fontWeight: 400, backgroundColor: isEN ? 'primary.main' : 'white', color: isEN ? 'white' : 'inherit', '&:hover': { color: 'white', backgroundColor: 'primary.btnMainHover' } }} onClick={handleChange('en')}>{t('en')}</Button>
        <Button sx={{ fontWeight: 400, backgroundColor: isRU ? 'primary.main' : 'white', color: isRU ? 'white' : 'inherit', '&:hover': { color: 'white', backgroundColor: 'primary.btnMainHover' } }} onClick={handleChange('ru')}>{t('ru')}</Button>
      </ButtonGroup>
    </Box>
  );
}

export default ChangeLanguage;