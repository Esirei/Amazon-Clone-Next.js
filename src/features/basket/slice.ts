import { createSlice } from '@reduxjs/toolkit';
import { State } from '~/store';

const slice = createSlice({
  name: 'basket',
  initialState: { items: [] },
  reducers: {
    addToBasket: (state, action) => {},
    removeFromBasket: (state, action) => {},
  },
});

export const { addToBasket, removeFromBasket } = slice.actions;
export const basketReducer = slice.reducer;

export const selectBasketItems = (state: State) => state.basket.items;
