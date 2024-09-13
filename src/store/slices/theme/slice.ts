import { createSlice } from '@reduxjs/toolkit';

import Theme from '../../../constants/Theme';

import type ITheme from './interfaces/ITheme';

export const initialState: ITheme = {
  theme: Theme.light,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => ({ theme: state.theme === Theme.light ? Theme.dark : Theme.light }),
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
