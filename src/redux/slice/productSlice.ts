import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { CharacteristicsBlockProps } from '../../components/CharacteristicsBlock/CharacteristicsBlock.props';

const arr = [
  {
    title: 'Screen diagonal',
    value: '6.7"',
  },
  {
    title: 'The screen resolution',
    value: '2796x1290',
  },
  {
    title: 'The screen refresh rate',
    value: '120 Hz',
  },
];
const listBlock = [
  {
    title: 'Screen',
    items: arr,
  },
  {
    title: 'CPU',
    items: arr,
  },
];
const data = {
  description: `Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year's 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.`,
  listBlock,
};

const initialState: CharacteristicsBlockProps = data;

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
});

//export const {  } = counterSlice.actions
export const selectProducts = (state: RootState) => state.product;
export default productSlice.reducer;
