import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { State } from '~/store';
import { Product } from '../product';

interface CartState {
  items: Product[];
}

const initialState: CartState = { items: [] };

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {},
  },
});

export const { addToCart, removeFromCart } = slice.actions;
export const cartReducer = slice.reducer;

export const selectCartItems = (state: State) => state.cart.items;
export const selectTotalCartItems = createSelector(selectCartItems, items => items.length);
