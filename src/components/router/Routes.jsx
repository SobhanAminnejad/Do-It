import React from 'react';
import loadable from '@loadable/component';
import Loading from './Loading';

const Home = loadable(() => import('../../views/home/Home'), {
  fallback: <Loading />,
});

const Login = loadable(() => import('../../views/login/Login'), {
  fallback: <Loading />,
});

const Boards = loadable(() => import('../../views/boards/Boards'), {
  fallback: <Loading />,
});

const Routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    exact: 'true',
    protected: false,
  },
  {
    path: '/login',
    component: Login,
    name: 'login',
    protected: false,
    exact: 'true',
  },
  {
    path: '/boards',
    component: Boards,
    name: 'boards',
    protected: true,
    exact: 'true',
  },
];

export default Routes;
