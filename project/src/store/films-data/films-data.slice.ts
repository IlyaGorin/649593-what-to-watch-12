import { createSlice } from '@reduxjs/toolkit';
import { FilmData } from '../../types/film';
import { NameSpace } from '../../const';
import { fetchFilmsAction } from '../api-actions';

type InitialStateTypes = {
  films: FilmData[];
  isLoading: boolean;
}

const initialState:InitialStateTypes = {
  films: [],
  isLoading: false,
};

export const filmsData = createSlice({
  name: NameSpace.FilmsData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFilmsAction.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
