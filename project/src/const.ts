export enum AppRoute {
  Root = '/',
  Login = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  Review = '/films/:id/review',
  Player = '/player/:id'
}

export enum TabNames {
  Overview ='Overview',
  Details = 'Details',
  Reviews='Reviews',
}

export enum APIRoute {
  Films = '/films',
}

export enum NameSpace {
  AppData = 'AppData',
  App = 'App',
  User = 'User',
  FilmsData = 'FilmsData',
}

export const DEFAULT_GENRE_VALUE = 'All genres';
