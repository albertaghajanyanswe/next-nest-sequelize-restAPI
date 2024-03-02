import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetProductsDto, Product, ProductDto, GetCategoriesDto } from '../../generated/openapi';
// import { axiosInstance } from '../client/axiosHelper';
import { apiEndpoints } from '../configs';
import { getCurrentUser } from '../lsService';

// const baseUrl = `${process.env.REACT_APP_UI_URL}/api` || 'http://localhost:4000/api';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const baseUrl = '';

export const productsAPI = createApi({
  reducerPath: 'productsAPI',
  // baseQuery: fetchBaseQuery({ baseUrl }) as BaseQueryFn<string | FetchArgs, unknown, CustomError, {}>,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_UI_URL,
    prepareHeaders: (headers, { getState }) => {
      const currentUser = getCurrentUser();
      if (currentUser?.token) {
        headers.set('authorization', `Bearer ${currentUser.token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Products', 'Product', 'Categories'],
  endpoints: (build) => ({
    getAllProducts: build.query<GetProductsDto, any>({
      query: (params) => {
        return {
          url: `api${apiEndpoints.products}?params=${encodeURIComponent(JSON.stringify(params))}`,
          // params
        }
      },
      providesTags: result => ['Products']
    }),
    getProduct: build.query<ProductDto, any>({
      query: ({ id }) => {
        return {
          url: `api${apiEndpoints.product.replace(':id', id)}`,
        }
      },
      providesTags: result => ['Product']
    }),
    updateProduct: build.mutation<Product, Partial<ProductDto> & { productId: number }>({
      query: ({ productId, ...data }) => {
        return {
          url: `api${apiEndpoints.product.replace(':id', `${productId}`)}`,
          method: 'PUT',
          body: data
        }
      },
      invalidatesTags: result => ['Products', 'Product']
    }),
    createProduct: build.mutation<ProductDto, Partial<ProductDto>>({
      query: (product) => ({
        url: `api${apiEndpoints.createProducts}`,
        method: 'POST',
        body: product
      }),
      invalidatesTags: result => ['Products']
    }),
    getAllCategories: build.query<GetCategoriesDto, any>({
      query: (params) => {
        return {
          url: `api${apiEndpoints.categories}?params=${encodeURIComponent(JSON.stringify(params))}`,
        }
      },
      providesTags: result => ['Categories']
    }),
    addToFavorite: build.mutation<ProductDto, { productId: string }>({
      query: (body) => ({
        url: `api${apiEndpoints.addToFavorite}`,
        method: 'POST',
        body: body
      }),
      invalidatesTags: result => ['Products']
    }),
    deleteFromFavorite: build.mutation<ProductDto, { id: string }>({
      query: ({ id }) => ({
        url: `api${apiEndpoints.deleteFavorite.replace(':id', id)}`,
        method: 'DELETE',
      }),
      invalidatesTags: result => ['Products']
    }),
  }),
});
