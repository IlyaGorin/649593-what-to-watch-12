import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PromoFilmData } from '../../types/promo-film';
import { AppRoute } from '../../const';
import Film from '../../pages/film/film';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import MyList from '../../pages/my-list/my-list';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import Review from '../../pages/review/review';
import Player from '../../pages/player/player';
import PrivateRoute from '../private-route/private-route';
import { FilmData } from '../../types/film';

type AppProps = {
  promoFilmData : PromoFilmData;
  filmsData: FilmData[];
}

function App({ promoFilmData, filmsData }:AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Main promoFilmData={promoFilmData} />} />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Film} element={<Film />} />
        <Route
          path={AppRoute.Review}
          element={
            <PrivateRoute authorizationStatus>
              <Review />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
