import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { FilmData } from '../types/film';
import { AppDispatch, State } from '../types/state';
import { Comment, CommentData } from '../types/comment';
import { AuthData } from '../types/auth-data';
import { APIRoute } from '../const';
import { UserData } from '../types/user-data';
import { saveToken, dropToken } from '../services/token';

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

export const fetchFilmAction = createAsyncThunk<FilmData, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async (id, { extra: api }) => {
    const { data } = await api.get<FilmData>(`${APIRoute.Films}/${id}`);
    return data;
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<FilmData[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async (id, { extra: api }) => {
    const { data } = await api.get<FilmData[]>(`${APIRoute.Films}/${id}/similar`);
    return data;
  },
);

export const fetchCommentsAction = createAsyncThunk<Comment[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (id, { extra: api }) => {
    const { data } = await api.get<Comment[]>(`${APIRoute.Comments}/${id}`);
    return data;
  },
);

export const postCommentAction = createAsyncThunk<Comment[], { comment: CommentData; id: number }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'comment/postComment',
  async ({ comment, id }, { extra: api }) => {
    const response = await api.post<Comment[]>(
      `${APIRoute.Comments}/${id}`,
      comment,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData | undefined, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserData>(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ login: email, password }, { extra: api }) => {
    const { data: { token }, data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    return data;
  },
);

export const logoutAction = createAsyncThunk<null, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    return null;
  },
);
