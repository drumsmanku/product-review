import { configureStore } from '@reduxjs/toolkit';
import isAdminReducer from './features/isAdminSlice';

export default configureStore({
  reducer: {
    isAdmin:isAdminReducer,
  },
});
