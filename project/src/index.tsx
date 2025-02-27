import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { ToastContainer } from 'react-toastify';
import { films } from './mocks/films';
import { store } from './store';
import { checkAuthAction, fetchFilmsAction } from './store/api-actions';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const promoFilmData = {
  filmName: 'The Grand Budapest Hotel',
  genre: 'Comedy',
  released: 2017,
  backgroundImage: 'https://12.react.pages.academy/static/film/background/What-We-Do-in-the-Shadows.jpg',
  posterImage: 'https://12.react.pages.academy/static/film/poster/What-We-Do-in-the-Shadows.jpg',
};

store.dispatch(fetchFilmsAction());
store.dispatch(checkAuthAction());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App promoFilmData={promoFilmData} filmsData={films}/>
    </Provider>,
  </React.StrictMode>,
);
