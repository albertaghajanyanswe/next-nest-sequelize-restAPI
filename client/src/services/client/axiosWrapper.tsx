import * as axiosHelper from './axiosHelper';

const get = <T, O = any>(options: O) => axiosHelper.apiClient<T, O>('GET', options);

const put = <T, O = any>(options: O) => axiosHelper.apiClient<T, O>('PUT', options);

const post = <T, O = any>(options: O) => axiosHelper.apiClient<T, O>('POST', options);

const del = <T, O = any>(options: O) => axiosHelper.apiClient<T, O>('DELETE', options);

const head = <T, O = any>(options: O) => axiosHelper.apiClient<T, O>('HEAD', options);

export { get, post, head, put, del };