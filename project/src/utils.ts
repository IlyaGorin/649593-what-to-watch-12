import { FilmData } from './types/film';

function getUniqueValue(objects: FilmData[], key: keyof FilmData) {
  const uniqueGenres = [...new Set(objects.map((obj) => obj[key]))];
  return uniqueGenres;
}

export { getUniqueValue };
