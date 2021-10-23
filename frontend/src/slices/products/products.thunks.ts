import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const productsFetch = createAsyncThunk(
  'products/productsFetch',
  async () => {
    try {
      const resp = await axios.get('http://localhost:3333/products');
      return resp?.data;
    } catch (error) {
      return 'Error occured';
    }
  },
);
