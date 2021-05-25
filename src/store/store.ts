import { Action as Ac, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch as useReduxDispatch } from 'react-redux';
import reducer from './reducer';

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;

export const useDispatch = () => useReduxDispatch<Dispatch>();

// types
export type State = ReturnType<typeof reducer>;
export type Thunk<R = void, E = undefined, A extends Ac = Ac<string>> = ThunkAction<R, State, E, A>;
export type Dispatch = typeof store.dispatch;
