import { AxiosResponse } from 'axios';
import { iRegistrationGuest } from '@/configs/shared/types';
import { GetUsersDto, UsersApi } from '@/generated/openapi';
import { axiosInstance } from '@/services/client/axiosHelper';
import { UserDto } from '@/generated/openapi';

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

function decodeGetCurrentUser<T,>(response: AxiosResponse<UserDto>) {
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
  getCurrentUser: async <T>(params?: any) => {
    console.log('\n\nusersApi = ', usersApi)
    console.log('axiosInstance = ', axiosInstance)

    return decodeGetCurrentUser(await usersApi.usersControllerGetCurrentUser(params));
  },
}

export default usersService;