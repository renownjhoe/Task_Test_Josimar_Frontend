import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import itemReducer from '../features/itemSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    items: itemReducer,
  },
});