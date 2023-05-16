import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FilmData } from '../types/film';
import { AppDispatch, State } from '../types/state';
import { APIRoute } from '../const';

export const fetchFilmsAction = createAsyncThunk<FilmData[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<FilmData[]>(APIRoute.Films);
    return data;
  },
);
