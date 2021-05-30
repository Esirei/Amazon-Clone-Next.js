import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { State } from '~/store';
import { Product } from '../product';

export interface CheckoutProduct extends Product {
  hasPrime;
  rating;
}

interface CartState {
  items: CheckoutProduct[];
}

const initialState: CartState = { items: [] };

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CheckoutProduct>) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {},
  },
});

export const { addToCart, removeFromCart } = slice.actions;
export const cartReducer = slice.reducer;

export const selectCartItems = (state: State) => state.cart.items;
export const selectTotalCartItems = createSelector(selectCartItems, items => items.length);
