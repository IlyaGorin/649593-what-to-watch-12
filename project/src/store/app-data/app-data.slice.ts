import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { DEFAULT_GENRE_VALUE } from '../../const';
import { FilmData } from '../../types/film';
import { Comment } from '../../types/comment';
import { fetchSimilarFilmsAction, fetchFilmAction, fetchCommentsAction, postCommentAction } from '../../store/api-actions';

type initialStateTypes = {
  genre: string;
  film: FilmData | null;
  filmId: null | number;
  similarFilms: FilmData[];
  comments: Comment[];
  hasErorr: boolean;
}

const initialState:initialStateTypes = {
  genre: DEFAULT_GENRE_VALUE,
  film: null,
  filmId: null,
  similarFilms: [],
  comments: [],
  hasErorr: false,
};

export const appData = createSlice({
  name: NameSpace.AppData,
  initialState,
  reducers: {
    setGenre: (state, action:PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setFilmId: (state, action: PayloadAction<number | null>) => {
      state.filmId = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmAction.fulfilled, (state, action) => {
        state.film = action.payload;
      })
      .addCase(fetchFilmAction.rejected, (state) => {
        state.hasErorr = true;
      })
      .addCase(fetchSimilarFilmsAction.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  },
});

export const { setGenre, setFilmId } = appData.actions;
