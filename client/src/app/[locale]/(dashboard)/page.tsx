'use client';

import React from 'react';
import { usersAPI } from '@/services/rtk/UsersApi';

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
    <main>
      Home 1
    </main>
  );
}