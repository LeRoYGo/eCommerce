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
    path: 'smart_chasy',
    name: 'Смарт-часы',
    img: 'https://static.onlinetrade.ru/img/categories2/smart_chasy_1238_1622018177.jpg',
  },
  {
    id: 2,
    path: 'smartfony',
    name: 'Смартфоны',
    img: 'https://static.onlinetrade.ru/img/categories2/smartfony_13_1622019358.jpg',
  },
  {
    id: 3,
    path: 'bytovaya-tehnika',
    name: 'Бытовая техника',
    img: 'https://c.dns-shop.ru/thumb/st4/fit/220/150/7adb729496d5b136af725df749ca23ba/0ee0566378f0d0d22d76b3c4765f9e251dd4335cb0088cad762a7853d34cd21a.png',
  },
  {
    id: 4,
    path: 'ofis-i-mebel',
    name: 'Офис и мебель',
    img: 'https://c.dns-shop.ru/thumb/st1/fit/220/150/9effa9f23e5ca7ce68dfd1faa5ea93c7/afbb811213d3d4c57d75c6d42155158e23cfa8ab63b320a681cdf6319c0714d2.jpg',
  },
  {
    id: 5,
    path: 'avtotovary',
    name: 'Автотовары',
    img: 'https://c.dns-shop.ru/thumb/st4/fit/220/150/6b46e7629e877167faa44957d0073418/6da96bc408ed338d24d7640619f98d10f7f7d65aab52ba06bcb126a82fb94022.png',
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
