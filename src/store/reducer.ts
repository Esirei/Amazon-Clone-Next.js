import { combineReducers } from '@reduxjs/toolkit';
import { basketReducer } from '~/features/basket';

const reducer = combineReducers({
  basket: basketReducer,
});

export default reducer;
