import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../../types/TStore';
import type IJoke from './interfaces/IJokes';

const selectJokes = (state: RootState): IJoke => state.jokes;
export const selectStatus = createSelector(selectJokes, (jokes) => jokes.status);

export const selectJoke = createSelector(selectJokes, (jokes) => jokes.joke);
