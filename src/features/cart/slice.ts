import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { State } from '~/store';
import { Product } from '../product';

export interface CartProduct extends Product {
  hasPrime;
  rating;
}

export interface CheckoutProduct extends CartProduct {
  quantity: number;
  total: number;
}

interface CartState {
  items: Record<CartProduct['id'], CheckoutProduct>;
}

const initialState: CartState = { items: {} };

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const { payload } = action;
      const item = state.items[payload.id];
      if (item) {
        item.quantity += 1;
        item.total = item.quantity * payload.price;
        return;
      }
      state.items[payload.id] = { ...payload, quantity: 1, total: payload.price };
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const item = state.items[action.payload];
      if (!item) return;
      if (item.quantity === 1) {
        delete state.items[action.payload];
        return;
      }
      item.quantity -= 1;
      item.total = item.quantity * item.price;
    },
  },
});

export const { addToCart, removeFromCart } = slice.actions;
export const cartReducer = slice.reducer;

export const selectCartItems = (state: State) => Object.values(state.cart.items);
export const selectCartItemsQuantity = createSelector(selectCartItems, items =>
  items.reduce((quantity, product) => quantity + product.quantity, 0),
);
