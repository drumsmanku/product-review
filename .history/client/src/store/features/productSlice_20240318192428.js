import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  product: null
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    clearProduct: (state) => {
      state.product = null;
    },
    updateProductField: (state, action) => {
      const { fieldName, value } = action.payload;
      if (state.product) {
        state.product = {
          ...state.product,
          [fieldName]: value
        };
      }
    }
  }
});

export const { setProduct, clearProduct, updateProductField } = productSlice.actions;

export default productSlice.reducer;
