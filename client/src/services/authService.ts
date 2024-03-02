// import { CreateUserDto, DefaultApi, User, UsersApi } from '../generated/openapi';
import { AuthApi } from '../generated/openapi';

import { axiosInstance } from './client/axiosHelper';

const PREFIX = 'api';

let authApi = new AuthApi(undefined, PREFIX, axiosInstance)
// let authApi = new DefaultApi(new Configuration());

const authService = {
  login: async ({data}: {data: { email: string, password: string }}) => {
    // authApi = new DefaultApi(new Configuration({ username: data.email, password: data.password}));
    return await authApi.authControllerLogin({data: {username: data.email, password: data.password}});
  },
}

export default authService;