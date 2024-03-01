// 'use client';

import React from 'react';
import ChangeTheme from '../components/changeTheme';
import ChangeLanguage from '../components/changeLanguage';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      Home page
      <ChangeTheme />
      <ChangeLanguage />
    </main>
  );
}