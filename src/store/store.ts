import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import dummyApi from './apis/dummy';
import jokesApi from './apis/jokes';
import auth from './slices/auth/slice';
import theme from './slices/theme/slice';
import translates from './slices/translates/slice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['auth', 'theme'],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    [jokesApi.reducerPath]: jokesApi.reducer,
    [dummyApi.reducerPath]: dummyApi.reducer,
    auth,
    translates,
    theme,
  }),
);

export function makeStore(preloadedState = {}) {
  return configureStore({
    reducer: persistedReducer,
    preloadedState: Object.keys(preloadedState).length ? preloadedState : undefined,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat([
        jokesApi.middleware,
        dummyApi.middleware,
      ]),
  });
}

export const store = makeStore();

setupListeners(store.dispatch);

export const persistor = persistStore(store);
