import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface categoriesState {
  id: number;
  category: string;
  name: string;
}
const initialState: categoriesState[] = [
  { id: 1, category: '', name: 'All' },
  { id: 2, category: 'chairs_benches', name: 'Chairs & Benches' },
  { id: 3, category: 'tables', name: 'Tables' },
  { id: 4, category: 'sofas', name: 'Sofas' },
  { id: 5, category: 'beds', name: 'Beds' },
  { id: 6, category: 'novelties', name: 'Novelties' },
];
export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

//export const {  } = counterSlice.actions
export const selectCategories = (state: RootState) => state.categories;
export default categoriesSlice.reducer;
