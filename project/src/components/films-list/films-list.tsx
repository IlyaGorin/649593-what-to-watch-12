import { useState, useEffect, useMemo } from 'react';
import { useAppSelector } from '../../hooks';
import { getGenre } from '../../store/app-data/app-data.selectors';
import { getFilmsData } from '../../store/films-data/films-data.selectors';
import { DEFAULT_GENRE_VALUE } from '../../const';
import ShowMoreButton from '../show-more-button/show-more-button';
import FilmCard from '../film-card/film-card';

const SHOW_FILMS_COUNT = 8;

function FilmsList(): JSX.Element {
  const [cardId, setCardId] = useState<number | null>(null);
  const [visibleFilmsCount, setVisibleFilmsCount] = useState(SHOW_FILMS_COUNT);
  const { genre, films } = useAppSelector((state) => ({
    genre: getGenre(state),
    films: getFilmsData(state),
  }));
  const filteredFilms = useMemo(() => genre === DEFAULT_GENRE_VALUE ? films : films.filter((film) => film.genre === genre), [films, genre]);
  const filmsForRender = filteredFilms.slice(0, visibleFilmsCount);

  useEffect(() => {
    setVisibleFilmsCount(SHOW_FILMS_COUNT);
  }, [genre]);

  const handleShowMoreClick = () => {
    setVisibleFilmsCount((prevCount) => prevCount + SHOW_FILMS_COUNT);
  };

  const handleFilmCardMouseEnter = (id: number) => {
    setCardId(id);
  };

  return (
    <>
      <div className="catalog__films-list">
        {filmsForRender.map((film) => (
          <FilmCard filmData={film} key={film.id} onMouseEnter={() => handleFilmCardMouseEnter(film.id)} />
        ))}
      </div>
      {visibleFilmsCount < filteredFilms.length && <ShowMoreButton onClick={handleShowMoreClick} />}
    </>
  );
}

export default FilmsList;
