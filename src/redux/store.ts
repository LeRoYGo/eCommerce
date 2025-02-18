import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import categoriesSlice from './slice/categoriesState';
import productsSlice from './slice/productsSlice';
import productSlice from './slice/productSlice';

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    products: productsSlice,
    product: productSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
