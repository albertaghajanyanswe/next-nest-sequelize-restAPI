// 'use client';

import React from 'react';
import ChangeTheme from '../components/changeTheme';
import ChangeLanguage from '../components/changeLanguage';
import styles from './page.module.css';
import { usersAPI } from '@/services/rtk/UsersApi';
import { iLogin } from '@/configs/shared/types';
import { lsConstants } from '@/configs/shared/constants';
import CustomLayout from '../components/layout/CustomLayout';

export default function Home() {
  return <CustomLayout><main className={styles.main}>Home page</main></CustomLayout>;

}
