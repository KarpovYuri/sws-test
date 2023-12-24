import { configureStore } from '@reduxjs/toolkit';
import { rowsApi } from './rowsApi';

export const store = configureStore({
  reducer: {
    [rowsApi.reducerPath]: rowsApi.reducer
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(rowsApi.middleware)
});
