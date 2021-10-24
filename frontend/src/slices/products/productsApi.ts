import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProducts } from './productsInterfaces';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3333/',
  }),
  endpoints: builder => ({
    GetAllProducts: builder.query<IProducts[], void>({
      query: () => `products`,
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
