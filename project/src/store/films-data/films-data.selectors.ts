import { State } from '../../types/state';
import { FilmData } from '../../types/film';
import { NameSpace } from '../../const';

export const getFilmsData = (state: State): FilmData[] => state[NameSpace.FilmsData].films;
export const getLoadingStatus = (state: State):boolean => state[NameSpace.FilmsData].isLoading;
