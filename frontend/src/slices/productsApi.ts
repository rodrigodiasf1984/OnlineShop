import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProducts } from './products/products.interfaces';

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
