import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface productsState {
  id: number;
  img: string;
  countStars: number;
  title: string;
  price: number;
}
const initialState: productsState[] = [
  {
    id: 1,
    img: `https://trade59.ru/content/files/catalog1/iphone16pd1_1726064003.jpg`,
    countStars: 5,
    title: '1.3 Chair',
    price: 69.9,
  },
  {
    id: 2,
    img: `https://trade59.ru/content/files/catalog1/xio14tb1_1727785276_2_2.jpg`,
    countStars: 3,
    title: 'Kuyu Desk',
    price: 6.9,
  },
  {
    id: 3,
    img: `https://trade59.ru/content/files/catalog1/2_hbiukv_jpg_1717496406.jpg`,
    countStars: 4,
    title: 'Neat Noon',
    price: 9.9,
  },
  {
    id: 4,
    img: `https://trade59.ru/content/files/catalog1/mitvapq55_1729850157.jpg`,
    countStars: 1,
    title: 'Morph',
    price: 169.9,
  },
  {
    id: 5,
    img: `https://trade59.ru/content/files/catalog1/2_hbiukv_jpg_1717496406.jpg`,
    countStars: 4,
    title: 'Neat Noon',
    price: 9.9,
  },
  {
    id: 6,
    img: `https://trade59.ru/content/files/catalog1/mitvapq55_1729850157.jpg`,
    countStars: 1,
    title: 'Morph',
    price: 169.9,
  },
];

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

//export const {  } = counterSlice.actions
export const selectProducts = (state: RootState) => state.products;
export default productsSlice.reducer;
