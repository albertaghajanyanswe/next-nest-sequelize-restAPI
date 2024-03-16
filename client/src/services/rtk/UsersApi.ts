import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { iLogin, iLoginGuest, iRegistration, iRegistrationGuest, IUser } from '@/configs/shared/types';
import { GetUsersDto, UpdateUserDto, UserDto } from '@/generated/openapi';
// import { axiosInstance } from '../client/axiosHelper';
import { apiEndpoints } from '@/services/configs';
import { getCurrentUser } from '@/services/lsService';

// const baseUrl = `${process.env.REACT_APP_UI_URL}/api` || 'http://localhost:4000/api';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const baseUrl = '';

// interface CustomError {
//   data: {
//     message: string,
//     stack: string
//   },
//   status: number
// }

export const usersAPI = createApi({
  reducerPath: 'usersAPI',
  // baseQuery: fetchBaseQuery({ baseUrl }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, {}>,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_UI_URL,
    prepareHeaders: (headers, { getState }) => {
      const currentUser = getCurrentUser();
      if (currentUser?.token) {
        headers.set('authorization', `Bearer ${currentUser.token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Users', 'CurrentUser'],
  endpoints: (build) => ({
    getAllUsers: build.query<GetUsersDto, any>({
      query: (params) => {
        return {
          // url: `api${apiEndpoints.users}?${JSON.stringify(params)}`,
          url: `api${apiEndpoints.users}?params=${encodeURIComponent(JSON.stringify(params))}`,
          // url: `api${apiEndpoints.users}`,
          // params
        }
      },
      providesTags: result => ['Users']
    }),
    getCurrentUser: build.query<UserDto, any>({
      query: () => {
        return {
          url: `api${apiEndpoints.currentUser}`,
        }
      },
      providesTags: ['CurrentUser']
    }),
    updateUser: build.mutation<UserDto, UpdateUserDto & { userId: number }>({
      query: ({userId, ...data}) => {
        return {
          url: `api${apiEndpoints.user.replace(':userId', `${userId}`)}`,
          method: 'PUT',
          body: data
        }
      },
    }),
    register: build.mutation<iRegistration, iRegistration>({
      query: (user) => ({
        url: `api${apiEndpoints.registration}`,
        method: 'POST',
        body: user
      }),
    }),
    registerGuest: build.mutation<iRegistrationGuest, iRegistrationGuest>({
      query: (user) => ({
        url: `api${apiEndpoints.registrationGuest}`,
        method: 'POST',
        body: user
      }),
    }),
    login: build.mutation<any, iLogin>({
      query: (credentials) => ({
        url: `api${apiEndpoints.login}`,
        method: 'POST',
        body: { email: credentials.email, password: credentials.password }
      }),
    }),
    postLogin: build.mutation<iLogin, iLogin>({
      query: (credentials) => ({
        url: `api${apiEndpoints.postLogin}`,
        method: 'POST',
        body: credentials
      }),
    }),
    postLoginGuest: build.mutation<iLoginGuest, iLoginGuest>({
      query: (credentials) => ({
        url: `api${apiEndpoints.postLoginGuest}`,
        method: 'POST',
        body: credentials
      }),
    }),
    deleteUser: build.mutation<IUser, IUser>({
      query: (user) => ({
        url: `/${apiEndpoints.user.replace(':userId', `${user.id}`)}`,
        method: 'DELETE',
        body: user.id
      }),
      invalidatesTags: ['Users']
    })
  }),
});
