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
    img: `https://i.ibb.co/VWJ7Ngkn/Default.png`,
    countStars: 5,
    title: '1.3 Chair',
    price: 69.9,
  },
  {
    id: 2,
    img: `https://i.ibb.co/5XmdN808/Default-1.png`,
    countStars: 3,
    title: 'Kuyu Desk',
    price: 6.9,
  },
  {
    id: 3,
    img: `https://i.ibb.co/FLsPKdGy/Default-2.png`,
    countStars: 4,
    title: 'Neat Noon',
    price: 9.9,
  },
  {
    id: 4,
    img: `https://i.ibb.co/DDD7CxnK/Default-3.png`,
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
