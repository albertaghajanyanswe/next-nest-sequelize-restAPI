'use client'

import { usersAPI } from '@/services/rtk/UsersApi';
import CustomLayout from '@/app/components/layout/CustomLayout';

export const CurrentUserProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: currentUser, isLoading } = usersAPI.useGetCurrentUserQuery({});
  console.log('1111111 currentUser = ', currentUser)
  return !isLoading && (
    currentUser ? <CustomLayout>{children}</CustomLayout> : children
  )
}