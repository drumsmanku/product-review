
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState = {
  isAdmin: false,
};

export const isAdminSlice = createSlice({
  name: 'isAdmin',
  initialState,
  reducers: {
    toggleAdminStatus: (state) => {
      state.isAdmin = !state.isAdmin; // Toggle the isAdmin state
    },
  },
});

export const { toggleAdminStatus } = isAdminSlice.actions;

export default isAdminSlice.reducer;
