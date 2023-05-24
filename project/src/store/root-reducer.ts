import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { filmsData } from './films-data/films-data.slice';
import { appData } from './app-data/app-data.slice';
import { userProcess } from './user-process/user-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.FilmsData]: filmsData.reducer,
  [NameSpace.AppData]: appData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
