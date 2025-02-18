import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

// https://67b40753392f4aa94fa903ac.mockapi.io/api/categories
// Запрос на сервер для получения категории

export type categoriesState = {
  id: number;
  title: string;
  img: string;
  categoryName: string;
};
const initialState: categoriesState[] = [
  {
    id: 1,
    categoryName: 'smartphone',
    title: 'Смартфоны',
    img: 'https://technolove.ru/upload/iblock/d16/Bitmap_5.webp',
  },
  {
    id: 2,
    categoryName: 'umnye-chasy-i-braslety',
    title: 'Умные часы и браслеты',
    img: 'https://technolove.ru/upload/iblock/58b/4-_1_.webp',
  },
  {
    id: 3,
    categoryName: 'tablets',
    title: 'Планшеты',
    img: 'https://technolove.ru/upload/iblock/653/Bitmap_7.webp',
  },
  {
    id: 4,
    categoryName: 'notebooks',
    title: 'Ноутбуки',
    img: 'https://technolove.ru/upload/iblock/9af/Bitmap_3.webp',
  },
  {
    id: 5,
    categoryName: 'monitors',
    title: 'Мониторы',
    img: 'https://technolove.ru/upload/iblock/653/Bitmap_7.webp',
  },
  {
    id: 6,
    categoryName: 'quadcopters',
    title: 'Квадрокоптеры',
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
