import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export type categoriesState = {
  id: number;
  name: string;
  img: string;
  path: string;
};
const initialState: categoriesState[] = [
  {
    id: 1,
    path: 'smartphone',
    name: 'Смартфоны',
    img: 'https://technolove.ru/upload/iblock/d16/Bitmap_5.webp',
  },
  {
    id: 2,
    path: 'umnye-chasy-i-braslety',
    name: 'Умные часы и браслеты',
    img: 'https://technolove.ru/upload/iblock/58b/4-_1_.webp',
  },
  {
    id: 3,
    path: 'tablets',
    name: 'Планшеты',
    img: 'https://technolove.ru/upload/iblock/653/Bitmap_7.webp',
  },
  {
    id: 4,
    path: 'notebooks',
    name: 'Ноутбуки',
    img: 'https://technolove.ru/upload/iblock/9af/Bitmap_3.webp',
  },
  {
    id: 5,
    path: 'monitors',
    name: 'Мониторы',
    img: 'https://technolove.ru/upload/iblock/653/Bitmap_7.webp',
  },
  {
    id: 6,
    path: 'quadcopters',
    name: 'Квадрокоптеры',
    img: 'https://technolove.ru/upload/iblock/9af/Bitmap_3.webp',
  },
];
export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

//export const {  } = counterSlice.actions
export const selectCategories = (state: RootState) => state.categories;
export default categoriesSlice.reducer;
