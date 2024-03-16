'use client';

import React from 'react';
import ChangeTheme from '../components/changeTheme';
import ChangeLanguage from '../components/changeLanguage';
import styles from './page.module.css';
import { usersAPI } from '@/services/rtk/UsersApi';
import { iLogin } from '@/configs/shared/types';
import { lsConstants } from '@/configs/shared/constants';

export default function Home() {
  // const [postLogin] = usersAPI.usePostLoginMutation();

  // const handleSubmitLogin = async () => {
  //   try {
  //     const res = await postLogin({ email: 'test1@yopmail.com', password: '11111'} as iLogin).unwrap();
  //     localStorage.setItem(lsConstants.CURRENT_USER, JSON.stringify(res));
  //   } catch (error: any) {
  //   }
  //   return true
  // }
  const { data: currentUser, isLoading } = usersAPI.useGetCurrentUserQuery({});

  return (
    <main className={styles.main}>
      Home
    </main>
  );
}