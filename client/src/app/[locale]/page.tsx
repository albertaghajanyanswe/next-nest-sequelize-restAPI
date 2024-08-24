'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import styles from './page.module.css';
import ChangeLanguage from '../components/changeLanguage';
import ChangeTheme from '../components/changeTheme';

export default function Home() {
  const pathname = usePathname();
  return (
    <main className={styles.main}>
      Home page
      <ChangeTheme />
      <ChangeLanguage />
      <Link href={`${pathname}/not-found`}>Not Found page</Link>
    </main>
  );
}
