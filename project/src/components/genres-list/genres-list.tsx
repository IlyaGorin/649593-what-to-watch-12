import { useState } from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilmsData } from '../../store/films-data/films-data.selectors';
import { getUniqueValue } from '../../utils';
import { setGenre } from '../../store/app-data/app-data.slice';
import { DEFAULT_GENRE_VALUE } from '../../const';

const KEY_NAME = 'genre';

function GenresList() {
  const [activeGenre, setActiveGenre] = useState(DEFAULT_GENRE_VALUE);
  const filmsData = useAppSelector(getFilmsData);
  const genres = getUniqueValue(filmsData, KEY_NAME);
  const allGenres = [DEFAULT_GENRE_VALUE, ...genres];
  const dispatch = useAppDispatch();

  return (
    <ul className="catalog__genres-list">
      {
        allGenres.map((genre)=> (
          <li className={cn('catalog__genres-item',{ 'catalog__genres-item--active': genre === activeGenre })} key={genre.toString()}>
            <a
              href='#'
              onClick={(evt)=> {
                evt.preventDefault();
                setActiveGenre(genre.toString());
                dispatch(setGenre(genre.toString()));
              }}
              className="catalog__genres-link"
            >{genre}
            </a>
          </li>
        ))
      }
    </ul>
  );
}

export default GenresList;
