import { combineReducers } from '@reduxjs/toolkit';
import { cartReducer } from '~/features/cart';

const reducer = combineReducers({
  cart: cartReducer,
});

export default reducer;
