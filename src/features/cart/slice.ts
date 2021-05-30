import { createSlice } from '@reduxjs/toolkit';
import { State } from '~/store';

const slice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {},
    removeFromCart: (state, action) => {},
  },
});

export const { addToCart, removeFromCart } = slice.actions;
export const cartReducer = slice.reducer;

export const selectCartItems = (state: State) => state.cart.items;
