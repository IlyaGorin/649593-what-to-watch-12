export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  Review = '/films/:id/review',
  Player = '/player/:id',
  NotFoundPage = '/404',
}

export enum TabNames {
  Overview ='Overview',
  Details = 'Details',
  Reviews='Reviews',
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments',
}

export enum NameSpace {
  AppData = 'AppData',
  App = 'App',
  User = 'User',
  FilmsData = 'FilmsData',
}

export const DEFAULT_GENRE_VALUE = 'All genres';

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const TOAST_WARNING_MESSAGE = 'You are not logged';
