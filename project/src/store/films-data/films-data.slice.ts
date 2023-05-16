import { createSlice } from '@reduxjs/toolkit';
import { FilmData } from '../../types/film';
import { NameSpace } from '../../const';
import { fetchFilmsAction } from '../api-actions';

type InitialStateTypes = {
  films: FilmData[];
}

const initialState:InitialStateTypes = {
  films: [],
};

export const filmsData = createSlice({
  name: NameSpace.FilmsData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
      });
  },
});
