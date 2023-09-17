import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { characterListExtAPI } from 'services/api';

export const store = configureStore({
  reducer: {
    [characterListExtAPI.reducerPath]: characterListExtAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(characterListExtAPI.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const extendedStore = {
  ...store,
  useDispatch: useAppDispatch,
  useSelector: useAppSelector,
} as const;

export type AppStoreType = typeof extendedStore;
