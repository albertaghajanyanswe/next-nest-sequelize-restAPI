import { AxiosResponse } from 'axios';
import { iRegistrationGuest } from '../configs/shared/types';
import { GetUsersDto, UsersApi } from '../generated/openapi';
import { axiosInstance } from './client/axiosHelper';

const PREFIX = '/api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function decodeCreateUser<T,>(response: AxiosResponse<iRegistrationGuest>): {
  nickName: string,
  password: string
} {
  const { nickName, password } = response.data
  return {
    nickName,
    password
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function decodeGetUsers<T,>(response: AxiosResponse<GetUsersDto>) {
  return response;
}

const usersApi = new UsersApi(undefined, PREFIX, axiosInstance)

const usersService = {
  createUser: async <T>({ data }: { data: { nickName: string, password: string } }) => {
    return decodeCreateUser<T>(await usersApi.usersControllerRegisterGuest({ data }));
  },
  getUsers: async <T>(params: any) => {
    return decodeGetUsers<T[]>(await usersApi.usersControllerGetAll(params));
  },
}

export default usersService;