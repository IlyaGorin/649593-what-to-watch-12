import { Link, useParams, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';
import Tabs from '../../components/tabs/tabs';
import FilmDetails from '../../components/film-details/film-details';
import FilmOverview from '../../components/film-overview/film-overview';
import FilmReviews from '../../components/film-reviews/film-reviews';
import FilmsList from '../../components/films-list/films-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCommentsAction, fetchFilmAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import { useEffect } from 'react';
import { getFilm } from '../../store/app-data/app-data.selectors';
import Spinner from '../../components/spinner/spinner';
import { setFilmId } from '../../store/app-data/app-data.slice';


function Film():JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(id) {
      dispatch(fetchFilmAction(id))
        .then((response) => {
          if (!response.payload) {
            navigate(AppRoute.NotFoundPage);
          }
        });
      dispatch(fetchSimilarFilmsAction(id));
      dispatch(fetchCommentsAction(id));
      dispatch(setFilmId(Number(id)));
    }
  },[id]);

  const film = useAppSelector(getFilm);

  if(film === null) {
    return <Spinner />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to={AppRoute.Review.replace(':id', '1')} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <Tabs>
                <FilmOverview />
                <FilmDetails />
                <FilmReviews />
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );

}

export default Film;
