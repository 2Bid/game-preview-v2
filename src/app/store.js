import { configureStore } from '@reduxjs/toolkit';
import searchFilter from '../features/searchFilter';

export const store = configureStore({
  reducer: {
    search: searchFilter,
  },
});
