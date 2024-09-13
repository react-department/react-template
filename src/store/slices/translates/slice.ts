import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import Statuses from '../../../constants/Statuses';
import i18n, { appLocales } from '../../../i18n';

import type ITranslates from './interfaces/ITranslates';

export const initialState: ITranslates = {
  locale: i18n.language,
  status: Statuses.idle,
};

export const toggleLocale = createAsyncThunk(
  'translates/toggleLocale',
  async () => {
    const nextLocaleIndex = appLocales.indexOf(i18n.language) + 1;
    const locale = nextLocaleIndex >= appLocales.length ? appLocales[0] : appLocales[nextLocaleIndex];
    await i18n.changeLanguage(locale);
    return locale;
  },
);

const translatesSlice = createSlice({
  name: 'translates',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(toggleLocale.pending, (state) => {
        state.status = Statuses.loading;
      })
      .addCase(toggleLocale.fulfilled, (state, action) => {
        state.status = Statuses.idle;
        state.locale = action.payload;
      })
      .addCase(toggleLocale.rejected, (state) => {
        state.status = Statuses.failed;
      });
  },
});

export default translatesSlice.reducer;
