import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { FilmData } from '../../types/film';

export const getGenre = (state: State): string => state[NameSpace.AppData].genre;
export const getFilmId = (state: State): number | null => state[NameSpace.AppData].filmId;
export const getFilm = (state: State): FilmData | null => state[NameSpace.AppData].film;
