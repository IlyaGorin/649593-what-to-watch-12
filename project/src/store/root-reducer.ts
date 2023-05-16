import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { filmsData } from './films-data/films-data.slice';
import { appData } from './app-data/app-data.slice';

export const rootReducer = combineReducers({
  [NameSpace.FilmsData]: filmsData.reducer,
  [NameSpace.AppData]: appData.reducer,
});
