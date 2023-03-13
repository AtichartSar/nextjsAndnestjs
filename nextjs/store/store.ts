import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import { useDispatch } from 'react-redux';

const reducer = {
  user: userReducer,
};

export const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
