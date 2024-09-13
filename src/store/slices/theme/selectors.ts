import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../../types/TStore';
import type ITheme from './interfaces/ITheme';

const selectTheme = (state: RootState): ITheme => state.theme;

const selectCurrentTheme = createSelector(selectTheme, (theme) => theme.theme);

export default selectCurrentTheme;
