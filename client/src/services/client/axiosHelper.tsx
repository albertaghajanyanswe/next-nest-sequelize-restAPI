import axios from 'axios';
import onUnauthorized from '@/services/errorHandlers';
import { getCurrentUser } from '@/services/lsService';

const AUTH_TOKEN = 'auth_token';

const getAuthHeader = () => {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  if (authToken) {
    return { Authorization: `Bearer ${authToken}` };
  }
  return null;
};

const defaultHeaderHandler = (request: any) => {
  const authHeader = getAuthHeader();
  if (authHeader) {
    request.headers = authHeader;
  }
  console.log('request = ', request)
  return request;
};

const getAuthHeader1 = () => {
  const currentUser = getCurrentUser();
  if (currentUser?.token) {
    return { Authorization: `Bearer ${currentUser?.token}` };
  }
  return null;
};


const defaultHeaderHandler1 = (request: any) => {
  const authHeader = getAuthHeader1();
  if (authHeader) {
    request.headers = authHeader;
  }
  return request;
}

let service: ReturnType<typeof axios.create>;

if (process.env.REACT_APP_ENV_MODE === 'production') {
  service = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    timeout: 60000,
  });
} else {
  service = axios.create({
    baseURL: `http://localhost:3000`,
    timeout: 60000,
  });
}

service.interceptors.request.use(defaultHeaderHandler1);

const setupInterceptors = (reactRouterHistory: any) => {
  service.interceptors.response.use(
    (response: any) => response,
    (error: any) => {
      const errMessage = error.message;
      const userIsNotAuthorized = errMessage === 'Request failed with status code 401';
      if (userIsNotAuthorized) {
        onUnauthorized(error, reactRouterHistory);
        return Promise.reject(error);
      }
      if (error.response &&
        error.response.data &&
        error.response.data.error &&
        (error.response.data.error.message === 'User is not authenticated.' ||
          error.response.data.error.message === 'No auth token')) {
        onUnauthorized(error, reactRouterHistory);
        return Promise.reject(error);
      }
      return Promise.reject(error);
    }
  );
  service.interceptors.request.use(defaultHeaderHandler);
};

const apiClient = <T, O>(method: string | undefined, options: O) => {
  return service.request<T>({
    ...options,
    method
  }).catch((error: any) => Promise.reject(error));
}

// const apiClient1 = (method: any, options: any) => service.request({
//   ...options,
//   method
// }).then((response: any) => response).catch((error: any) => Promise.reject(error));

export { apiClient, setupInterceptors, service as axiosInstance };