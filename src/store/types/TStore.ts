import type { EnhancedStore } from '@reduxjs/toolkit';
import type { store } from '../store';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = EnhancedStore<RootState>;
