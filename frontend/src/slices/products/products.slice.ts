/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { IProducts } from './products.interfaces';
import { productsFetch } from './products.thunks';

const initialState = {
  items: [] as IProducts[],
  status: {},
  errors: {} as unknown,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder.addCase(productsFetch.pending, state => {
      state.status = 'Pending';
    });

    builder.addCase(productsFetch.rejected, (state, action) => {
      state.status = 'rejected';
      state.errors = action.payload;
    });

    builder.addCase(productsFetch.fulfilled, (state, action) => {
      state.status = 'success';
      state.items = action.payload as IProducts[];
    });
  },
});

export default productsSlice.reducer;
