import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { DEFAULT_GENRE_VALUE } from '../../const';

const initialState = {
  genre: DEFAULT_GENRE_VALUE,
  filteredFilms: [],
};

export const appData = createSlice({
  name: NameSpace.AppData,
  initialState,
  reducers: {
    setGenre: (state, action:PayloadAction<string>) => {
      state.genre = action.payload;
    },
  },
});

export const { setGenre } = appData.actions;
